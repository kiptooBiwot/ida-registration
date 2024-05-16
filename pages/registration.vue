<script setup>
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { Country, State, City } from 'country-state-city'

const details = reactive({
  name: '',
  email: '',
  phone: '',
  acceptTerms: false,
  country: '',
  region: '',
  city: '',
  specificLocation: '',
  farmingPractice: '',
  otherPractices: '',
  primaryCrops: [],
  yearsOfExperience: 0,
  farmSize: 0,
})

// Validation  Rules

// Farmer Details validation
const farmerRules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Your full name is required', required),
      minLength: helpers.withMessage(
        'A name must have at least three characters.',
        minLength
      ),
    },
    email: {
      required: helpers.withMessage('An email must be provided', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    acceptTerms: {
      required,
      sameAs: sameAs(true),
      // sameAs: helpers.withMessage(
      // 'We need your consent to process and store your personal information',
      // sameAs
      // ),
    },
    phone: {
      // maxLength: helpers.withMessage('This is not a valid phone number'),
    },
  }
})
const v$ = useVuelidate(farmerRules, details)

// Farm Particulars and Production
const farmParticularsRules = computed(() => {
  return {
    farmingPractice: {
      required: helpers.withMessage(
        'What farm practices are you practicing',
        required
      ),
    },
    newCrop: {
      // required: helpers.withMessage('Enter the primary crops in your farm', required)
    },
    // newCrop: {
    //   required: helpers.withMessage('Enter', required)
    // },
    yearsOfExperience: {
      required: helpers.withMessage(
        'Enter your farming experience in years',
        required
      ),
    },
    farmSize: {
      required: helpers.withMessage(
        'Please enter the size of your farm',
        required
      ),
    },
  }
})

const x$ = useVuelidate(farmParticularsRules, details)

const selectedCountry = ref(null)
const selectedState = ref(null)
const selectedCity = ref(null)
const countries = ref([])
const states = ref([])
const cities = ref([])

// Farm & Farmer Location rules
const locationRules = {
  selectedCountry: { required },
  selectedState: { required },
  selectedCity: { required },
}

const { w$ } = useVuelidate(locationRules)

const countryValid = computed(
  () => w$?.selectedCountry?.$dirty && !w$?.selectedCountry?.required
)
const stateValid = computed(
  () => w$?.selectedState?.$dirty && !w$?.selectedState?.required
)
const cityValid = computed(
  () => w$?.selectedCity?.$dirty && !w$?.selectedCity?.required
)

const loadCountries = () => {
  countries.value = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }))
}

const loadStates = () => {
  if (selectedCountry.value) {
    states.value = State.getStatesOfCountry(selectedCountry.value).map(
      (state) => ({ label: state.name, value: state.isoCode })
    )
  } else {
    states.value = []
  }
}

const loadCities = () => {
  if (selectedState.value) {
    cities.value = City.getCitiesOfState(
      selectedCountry.value,
      selectedState.value
    ).map((city) => ({ label: city.name, value: city.name }))
  } else {
    cities.value = []
  }
}

watch(selectedCountry, () => {
  if (countries.value.length > 0) {
    const countryName = countries.value.find((country) => {
      if (country.value === selectedCountry.value) {
        return country.label
      }
    })
    details.country = countryName.label
  }
  loadStates()
})

watch(selectedState, () => {
  if (states.value.length > 0) {
    const stateName = states.value.find((state) => {
      if (state.value === selectedState.value) {
        return state.label
      }
    })
    details.region = stateName.label
  }
  loadCities()
})

watch(selectedCity, () => {
  if (selectedCity.value) {
    details.city = selectedCity.value
  }
})

// Load initial data
loadCountries()

// Crops
const newCrop = ref('')

const addNewCrop = () => {
  if (newCrop.value.trim() !== '') {
    details.primaryCrops.push(newCrop.value)
    newCrop.value = '' // Clear the text input
  }
}

const removeCrop = (index) => {
  details.primaryCrops.splice(index, 1)
}

const isLoading = ref(false)
const step = ref(1)
const step1Complete = ref(false)
const step2Complete = ref(false)
const step3Complete = ref(false)
const registrationComplete = ref(false)

const currentStep = (stepNumber) => {
  step.value = stepNumber
}

const goToNext = (stepNumber) => {
  if (stepNumber === 2) {
    v$.value.$validate()
    if (!v$.value.$error) {
      step.value = stepNumber
      step1Complete.value = true
    } else {
      step1Complete.value = false
    }
  } else if (stepNumber === 3) {
    step.value = stepNumber
    step2Complete.value = true
  }
}

const register = async (event) => {
  isLoading.value = true

  x$.value.$validate()
  if (!x$.value.$error) {
    try {
      const response = await $fetch('/api/sendEmail', {
        method: 'POST',
        body: {
          name: details.name,
          email: details.email,
          phone: details.phone,
          country: details.country,
          region: details.region,
          city: details.city,
          specificLocation: details.specificLocation,
          farmingPractice: details.farmingPractice,
          otherPractices: details.otherPractices,
          primaryCrops: details.primaryCrops,
          yearsOfExperience: details.yearsOfExperience,
          farmSize: details.farmSize,
        },
      })

      if (response) {
        isLoading.value = false
        registrationComplete.value = true
      }
    } catch (error) {
      isLoading.value = false
      registrationComplete.value = false
      return error
    }
  } else {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="bg-purple-50 min-h-screen w-full">
    <div class="w-full bg-purple-500 h-[80px]"></div>
    <div class="max-w-6xl mx-auto my-[40px]">
      <div class="mx-5 md:mx-10 lg:mx-40 pt-2 bg-gray-50 rounded-md shadow-md">
        <div class="flex p-5">
          <div class="hidden md:block md:w-3/12 mx-4 p-4">
            <div
              class="flex cursor-pointer text-purple-800 items-center"
              @click.prevent="currentStep(1)"
            >
              <div
                class="rounded-full flex items-center justify-center transition duration-500 ease-in-out flex-shrink-0 h-12 w-12 py-3 border-2 hover:scale-105"
                :class="{
                  'text-gray-500': step !== 1,
                  'text-purple-800 border-purple-800':
                    step === 1 || step1Complete,
                }"
              >
                <Icon
                  v-if="!step1Complete"
                  name="ic:baseline-person-add-alt-1"
                  class="w-5 h-5"
                  :class="{
                    'text-gray-500': step !== 1,
                    'text-purple-800 border-purple-800':
                      step === 1 || step1Complete,
                  }"
                />
                <Icon
                  v-else
                  name="heroicons:check-16-solid"
                  class="w-7 h-7"
                  :class="{
                    'text-gray-500': step !== 1,
                    'text-purple-800 border-purple-800':
                      step === 1 || step1Complete,
                  }"
                />
              </div>
              <div class="ml-5">
                <h5
                  class="uppercase font-medium text-xs"
                  :class="{
                    'text-gray-500 ': step !== 1,
                    'text-purple-800 border-purple-800': step === 1,
                  }"
                >
                  Farmer Details
                </h5>
              </div>
            </div>
            <div
              class="border-l-2 h-16 transition duration-500 ease-in-out ml-6"
              :class="{
                'text-gray-500': step !== 1,
                'text-purple-800 border-purple-800':
                  step === 1 || step1Complete,
              }"
            ></div>

            <!-- Second Step -->
            <div
              class="flex cursor-pointer items-center"
              @click.prevent="currentStep(2)"
            >
              <div
                class="flex flex-shrink-0 items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 hover:scale-105"
                :class="{
                  'text-': step !== 2,
                  'text-purple-800 border-purple-800':
                    step === 2 || step2Complete,
                }"
              >
                <Icon
                  v-if="!step2Complete"
                  name="heroicons:map-pin-16-solid"
                  class="w-5 h-5"
                  :class="{
                    'text-gray-500': step !== 2,
                    'text-purple-800 border-purple-800':
                      step === 2 || step2Complete,
                  }"
                />
                <Icon
                  v-else
                  name="heroicons:check-16-solid"
                  class="w-7 h-7"
                  :class="{
                    'text-gray-500': step !== 2,
                    'text-purple-800 border-purple-800':
                      step === 2 || step2Complete,
                  }"
                />
              </div>
              <div class="ml-5">
                <h5
                  class="uppercase font-medium text-xs"
                  :class="{
                    'text-gray-500 ': step !== 2,
                    'text-purple-800 border-purple-800':
                      step === 2 || step2Complete,
                  }"
                >
                  Farmer & Farm Location
                </h5>
              </div>
            </div>
            <div
              class="border-l-2 h-16 transition duration-500 ease-in-out ml-6"
              :class="{
                'text-gray-500 ': step !== 2,
                'text-purple-800 border-purple-800':
                  step === 2 || step2Complete,
              }"
            ></div>

            <!-- STEP 3 Details -->
            <div
              class="flex cursor-pointer text-purple-800 items-center"
              @click.prevent="currentStep(3)"
            >
              <div
                class="flex flex-shrink-0 items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 hover:scale-105"
                :class="{
                  'text-gray-500 bg-white': step !== 3,
                  'text-purple-800 border-purple-800':
                    step === 3 || registrationComplete,
                }"
              >
                <Icon
                  v-if="!step3Complete"
                  name="heroicons:clipboard-document-list"
                  class="w-5 h-5"
                  :class="{
                    'text-gray-500': step !== 3,
                    'text-purple-800 border-purple-800':
                      step === 3 || step3Complete,
                  }"
                />
                <Icon
                  v-else
                  name="heroicons:check-16-solid"
                  class="w-7 h-7"
                  :class="{
                    'text-gray-500': step !== 3,
                    'text-purple-800 border-purple-800':
                      step === 3 || step3Complete,
                  }"
                />
              </div>
              <!-- TExt -->
              <div v-if="!registrationComplete" class="ml-5">
                <h5
                  class="uppercase font-medium text-xs"
                  :class="{
                    'text-gray-500 ': step !== 3,
                    'text-purple-800 border-purple-800':
                      step === 3 || registrationComplete,
                  }"
                >
                  Farm Particulars
                </h5>
              </div>
              <div v-else class="ml-5">
                <h5
                  class="uppercase font-medium text-xs"
                  :class="{
                    'text-gray-500 ': step !== 3,
                    'text-purple-800 border-purple-800':
                      step === 3 || registrationComplete,
                  }"
                >
                  Complete
                </h5>
              </div>
            </div>
          </div>

          <!-- Form Content -->
          <div class="w-full md:w-9/12 bg-white p-5 rounded-md shadow-md">
            <div v-if="step === 1">
              <div class="flex flex-col overflow-y-auto md:flex-row">
                <div
                  class="flex items-center justify-center md:px-10 md:py-4 sm:p-4 md:w-full"
                >
                  <div class="w-full">
                    <h1
                      class="mb-4 text-xl flex gap-5 items-center font-semibold"
                    >
                      Personal Information
                      <span class="block md:hidden font-medium text-base"
                        >(1/3)</span
                      >
                    </h1>
                    <div class="w-full space-y-1">
                      <div>
                        <label for="name" class="mt-4 text-xs">
                          Full Name
                          <input
                            id="name"
                            v-model="details.name"
                            type="text"
                            @change="v$.name.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                v$.name.$error,
                              'border-[#42d392] ': !v$.name.$invalid,
                            }"
                          />
                          <div>
                            <span
                              class="text-xs text-red-500"
                              v-if="v$.name.$error"
                              >{{ v$.name.$errors[0].$message }}</span
                            >
                          </div>
                        </label>
                      </div>
                      <div>
                        <label for="email" class="mt-4 text-xs">
                          Email Address
                          <input
                            id="email"
                            v-model="details.email"
                            type="email"
                            @change="v$.email.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                v$.email.$error,
                              'border-[#42d392] ': !v$.email.$invalid,
                            }"
                          />
                          <div>
                            <span
                              class="text-xs text-red-500"
                              v-if="v$.email.$error"
                              >{{ v$.email.$errors[0].$message }}</span
                            >
                          </div>
                        </label>
                      </div>
                      <div class="">
                        <label for="email" class="mt-4 text-xs">
                          Phone Number (Optional)
                          <input
                            id="phone"
                            v-model="details.phone"
                            type="text"
                            @change="v$.phone.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                v$.phone.$error,
                              'border-[#42d392] ': !v$.phone.$invalid,
                            }"
                          />
                          <div>
                            <span
                              class="text-xs text-red-500"
                              v-if="v$.phone.$error"
                              >{{ v$.phone.$errors[0].$message }}</span
                            >
                          </div>
                        </label>
                      </div>
                      <br />
                      <div class="flex items-center">
                        <!-- <input
                          v-model="details.acceptTerms"
                          id="default-checkbox"
                          type="checkbox"
                          :value="details.acceptTerms"
                          @change="v$.acceptTerms.$touch"
                          :class="{
                            'border-red-500 focus:border-red-500':
                              v$.acceptTerms.$error,
                            'border-[#42d392] ': !v$.acceptTerms.$invalid,
                          }"
                          class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        /> -->
                        <input
                          v-model="details.acceptTerms"
                          type="checkbox"
                          id="acceptTerms"
                          name="acceptTerms"
                          :value="details.acceptTerms"
                          @change="v$.acceptTerms.$touch"
                          :class="{
                            'border-red-500 focus:border-red-500':
                              v$.acceptTerms.$error,
                            'border-[#42d392] ': !v$.acceptTerms.$invalid,
                          }"
                          class="rounded w-4 h-4 border-gray-300 text-purple-800 focus:ring-purple-800"
                        />
                        <label for="acceptTerms" class="ms-2 text-sm">
                          By continuing, I agree to the collection of my data,
                          IDA's
                          <NuxtLink
                            to="/privacy-policy"
                            class="text-purple-800 font-medium hover:underline cursor-pointer"
                            >Privacy Policy</NuxtLink
                          >
                          and
                          <NuxtLink
                            to="/terms-of-service"
                            class="text-purple-800 font-medium hover:underline cursor-pointer"
                          >
                            Terms of Service</NuxtLink
                          >
                        </label>
                      </div>
                      <div>
                        <span
                          class="text-xs text-red-500"
                          v-if="v$.acceptTerms.$error"
                        >
                          We need your consent to process and store your
                          personal information
                          <!-- {{ v$.acceptTerms.$errors[0].$message }} -->
                        </span>
                      </div>

                      <!-- <div>
                        <label for="gender" class="mt-4 text-xs">
                          Gender
                          <select id="gender" v-model="gender" name="gender">
                            <option value="">Choose one</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Male">Other</option>
                          </select>
                        </label>
                      </div> -->
                    </div>
                    <hr class="my-8" />
                    <button class="btn-primary" @click.prevent="goToNext(2)">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SECOND STEP -->
            <div v-if="step === 2">
              <div class="flex flex-col overflow-y-auto md:flex-row">
                <div
                  class="flex items-center justify-center md:px-10 md:py-4 sm:p-4 md:w-full"
                >
                  <div class="w-full">
                    <h1
                      class="mb-4 text-xl flex items-center gap-5 font-semibold"
                    >
                      Farm and Farmer Location
                      <span class="block md:hidden font-medium text-base"
                        >(2/3)</span
                      >
                    </h1>
                    <div class="w-full space-y-3">
                      <div>
                        <label for="country" class="mt-4 text-xs">
                          Country
                          <select
                            id="country"
                            v-model="selectedCountry"
                            name="country"
                            required
                            @change="w$?.selectedCountry?.$touch()"
                          >
                            <!-- @change="w$.selectedCountry.$touch()" :class="{
    'border-red-500 focus:border-red-500': w$.selectedCountry.$error,
    'border-[#42d392] ': !w$.selectedCountry.$invalid,
  }"                          -->
                            <option value="">Choose one</option>
                            <option
                              v-for="(country, index) in countries"
                              :key="index"
                              :value="country.value"
                            >
                              {{ country.label }}
                            </option>
                          </select>
                          <div>
                            <div
                              v-if="!countryValid"
                              class="error-message text-gray-400"
                            >
                              *Required
                            </div>
                            <!-- <span class="text-xs text-red-500" v-if="w$.selectedCountry.$error">{{
              w$.selectedCountry.$errors[0].$message
            }}</span> -->
                          </div>
                        </label>
                      </div>
                      <div>
                        <label for="state" class="mt-4 text-xs">
                          Region/State/Province/County
                          <select
                            id="state"
                            v-model="selectedState"
                            required
                            name="state"
                            :disabled="!selectedCountry"
                            @change="w$?.selectedCountry?.$touch()"
                          >
                            <!-- @change="w$.selectedState.$touch()" :class="{
    'border-red-500 focus:border-red-500': w$.selectedState.$error,
    'border-[#42d392] ': !w$.selectedState.$invalid,
  }" -->

                            <option value="">Choose one</option>
                            <option
                              v-for="(state, index) in states"
                              :key="index"
                              :value="state.value"
                            >
                              {{ state.label }}
                            </option>
                          </select>
                          <div>
                            <div
                              v-if="!stateValid"
                              class="error-message text-gray-400"
                            >
                              *Required
                            </div>
                            <!-- <span class="text-xs text-red-500" v-if="w$.selectedState.$error">{{
              w$.selectedState.$errors[0].$message
            }}</span> -->
                          </div>
                        </label>
                      </div>
                      <div>
                        <label for="city" class="mt-4 text-xs">
                          Choose the Closest City or Town near you
                          <select
                            id="city"
                            v-model="selectedCity"
                            required
                            name="city"
                            :disabled="!selectedState"
                            @change="w$?.selectedCountry?.$touch()"
                          >
                            <!-- @change="w$.selectedCity.$touch()" :class="{
    'border-red-500 focus:border-red-500': w$.selectedCity.$error,
    'border-[#42d392] ': !w$.selectedCity.$invalid,
  }" -->
                            <option value="">Choose one</option>
                            <option
                              v-for="(city, index) in cities"
                              :key="index"
                              :value="city.value"
                            >
                              {{ city.label }}
                            </option>
                          </select>
                          <div>
                            <div
                              v-if="!cityValid"
                              class="error-message text-gray-400"
                            >
                              *Required
                            </div>
                            <!-- <span class="text-xs text-red-500" v-if="w$.selectedCity.$error">{{
              w$.selectedCity.$errors[0].$message
            }}</span> -->
                          </div>
                        </label>
                      </div>

                      <div>
                        <label for="specificLocation" class="mt-4 text-xs">
                          Specific Farm Location (Optional)
                          <input
                            id="specificLocation"
                            v-model="details.specificLocation"
                            type="text"
                            name=""
                          />
                        </label>
                      </div>
                    </div>

                    <hr class="my-8" />
                    <button class="btn-primary" @click.prevent="goToNext(3)">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- THIRD STEP ************ -->
            <div v-if="step === 3">
              <div
                v-if="!registrationComplete"
                class="flex flex-col overflow-y-auto md:flex-row"
              >
                <div
                  class="flex items-center justify-center md:px-10 md:py-4 sm:p-4 md:w-full"
                >
                  <div class="w-full">
                    <h1
                      class="mb-4 text-xl flex items-center gap-5 font-semibold"
                    >
                      Farm Particulars and Production
                      <span class="block md:hidden font-medium text-base"
                        >(3/3)</span
                      >
                    </h1>
                    <div class="w-full space-y-1">
                      <div class="mb-2 text-sm">
                        <label class="block mb-2">Farming Practices:</label>
                        <div class="mb-2">
                          <input
                            type="radio"
                            id="organic"
                            value="Organic"
                            v-model="details.farmingPractice"
                            @change="x$.farmingPractice.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                x$.farmingPractice.$error,
                              'border-[#42d392] ': !x$.farmingPractice.$invalid,
                            }"
                          />
                          <label for="organic" class="ml-2">Organic</label>
                          <div>
                            <span
                              class="text-xs text-red-500"
                              v-if="x$.farmingPractice.$error"
                              >{{
                                x$.farmingPractice.$errors[0].$message
                              }}</span
                            >
                          </div>
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            id="traditional"
                            value="Traditional"
                            v-model="details.farmingPractice"
                          />
                          <label for="traditional" class="ml-2"
                            >Traditional</label
                          >
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            id="other"
                            value="Other"
                            v-model="details.farmingPractice"
                          />
                          <label for="other" class="ml-2">Other</label>
                          <input
                            type="text"
                            v-model="details.otherPractice"
                            v-if="details.farmingPractice === 'Other'"
                            class="ml-2 border rounded py-1 px-2"
                          />
                        </div>
                      </div>
                      <div class="">
                        <label class="mt-4 text-xs"
                          >Primary Crops you Plant in your Farm:
                          <div class="flex gap-5 items-center">
                            <input type="text" id="crop" v-model="newCrop" />
                            <!-- @change="x$.newCrop.$touch" :class="{
              'border-red-500 focus:border-red-500': x$.newCrop.$error,
              'border-[#42d392] ': !x$.newCrop.$invalid,
            }" -->
                            <Icon
                              @click="addNewCrop"
                              name="heroicons:plus-circle"
                              color=""
                              class="w-8 h-8 text-green-600"
                            />
                          </div>
                          <div>
                            <!-- <span class="text-xs text-red-500" v-if="x$.newCrop.$error">{{
              x$.newCrop.$errors[0].$message
            }}</span> -->
                          </div>
                          <ul class="flex flex-wrap gap-3 mt-3">
                            <li
                              v-for="(crop, index) in details.primaryCrops"
                              :key="index"
                              class="py-[2px] px-2 bg-purple-800 rounded-md text-white font-medium text-sm"
                            >
                              {{ crop }}
                              <Icon
                                @click="removeCrop(index)"
                                name="heroicons:x-mark-20-solid"
                                class="w-5 h-5 fill-white cursor-pointer"
                              >
                              </Icon>
                            </li>
                          </ul>
                        </label>
                      </div>

                      <div>
                        <label for="farmSize" class="mt-4 text-xs">
                          Farm Size (Acres)
                          <input
                            id="farmSize"
                            v-model="details.farmSize"
                            type="number"
                            min="0"
                            name=""
                            newCrop
                            @change="x$.farmSize.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                x$.farmSize.$error,
                              'border-[#42d392] ': !x$.farmSize.$invalid,
                            }"
                          />
                        </label>
                        <div>
                          <span
                            class="text-xs text-red-500"
                            v-if="x$.farmSize.$error"
                            >{{ x$.farmSize.$errors[0].$message }}</span
                          >
                        </div>
                      </div>
                      <div>
                        <label for="farmingExperience" class="mt-4 text-xs">
                          Years of Farming Experience
                          <input
                            id="farmingExperience"
                            v-model="details.yearsOfExperience"
                            type="number"
                            min="0"
                            name=""
                            @change="x$.yearsOfExperience.$touch"
                            :class="{
                              'border-red-500 focus:border-red-500':
                                x$.yearsOfExperience.$error,
                              'border-[#42d392] ':
                                !x$.yearsOfExperience.$invalid,
                            }"
                          />
                        </label>
                        <div>
                          <span
                            class="text-xs text-red-500"
                            v-if="x$.yearsOfExperience.$error"
                            >{{
                              x$.yearsOfExperience.$errors[0].$message
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <hr class="my-8" />
                    <UButton
                      :loading="isLoading"
                      loading-icon="i-eos-icons-loading"
                      @click="register"
                      size="md"
                      color="purple"
                      block
                    >
                      Register
                    </UButton>
                  </div>
                </div>
              </div>
              <div v-else>
                <RegistrationSuccess />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

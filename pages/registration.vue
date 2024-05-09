<script setup>
import { Country, State, City } from 'country-state-city'
import { RegistrationSchema } from '../validation schemas/registration'
// import { FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form'

const selectedCountry = ref(null)
const selectedState = ref(null)
const selectedCity = ref(null)
const countries = ref([])
const states = ref([])
const cities = ref([])
const isLoading = ref(false)
const isRegistrationComplete = ref(false)

const details = reactive({
  name: '',
  email: '',
  phone: '',
  country: '',
  region: '',
  city: '',
  specificLocation: '',
  farmingPractice: '',
  otherPractices: '',
  primaryCrops: [],
  yearsOfExperience: 0,
  farmSize: 0
})

const newCrop = ref('')

const loadCountries = () => {
  countries.value = Country.getAllCountries().map(country => ({ label: country.name, value: country.isoCode }));

  // console.log(countries.value);
};

const loadStates = () => {
  if (selectedCountry.value) {
    states.value = State.getStatesOfCountry(selectedCountry.value).map(state => ({ label: state.name, value: state.isoCode }));
  } else {
    states.value = [];
  }
};

const loadCities = () => {
  if (selectedState.value) {
    cities.value = City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({ label: city.name, value: city.name }));
  } else {
    cities.value = [];
  }
};

watch(selectedCountry, () => {
  if (countries.value.length > 0) {
    const countryName = countries.value.find((country) => {
      if (country.value === selectedCountry.value) {
        return country.label
      }
    })
    details.country = countryName.label
  }
  loadStates();
});

watch(selectedState, () => {
  if (states.value.length > 0) {
    const stateName = states.value.find((state) => {
      if (state.value === selectedState.value) {
        return state.label
      }
    })
    details.region = stateName.label
  }
  loadCities();
});

watch(selectedCity, () => {
  if (selectedCity.value) {
    details.city = selectedCity.value
  }
})

// Load initial data
loadCountries();

const addNewCrop = () => {
  if (newCrop.value.trim() !== '') {

    details.primaryCrops.push(newCrop.value)
    newCrop.value = ''; // Clear the text input
  }
}

const removeCrop = (index) => {
  details.primaryCrops.splice(index, 1)
}

const register = async (event) => {

  isLoading.value = true

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
    }
  })

  isLoading.value = false
  isRegistrationComplete.value = true
}

</script>

<template>
  <div class="w-full min-h-screen  bg-purple-50 py-[100px]">
    <div class="max-w-lg mx-5 md:mx-auto">
      <UForm v-if="!isRegistrationComplete" :schema="RegistrationSchema" :state="details" class="space-y-[50px]">
        <div class=" p-8 bg-white rounded shadow-md text-sm">
          <h3 class="font-bold text-2xl flex justify-center  text-[#673F7B] mb-5">Registration Form</h3>
          <!-- Personal Information -->
          <fieldset class="space-y-3">
            <legend class="text-lg font-medium mb-2">Personal Information</legend>
            <UFormGroup label="Full Name" name="name">
              <UInput v-model="details.name" placeholder="Full name" />
            </UFormGroup>
            <UFormGroup label="Email Address" name="email">
              <UInput v-model="details.email" placeholder="Email address" />
            </UFormGroup>
            <UFormGroup label="Enter Phone Number (Optional)" name="phone">
              <UInput v-model="details.phone" placeholder="Phone number format +254720000000" />
            </UFormGroup>
          </fieldset>
        </div>
        <div class="max-w-lg mx-5 md:mx-auto py-4 px-8 bg-white rounded shadow-md mt-[80px] text-sm">
          <!-- Farm Location -->
          <fieldset class="mb-4 space-y-5">
            <legend class="text-lg font-medium mb-2">Farm Location</legend>
            <UFormGroup label="Select Country" name="country">
              <USelect v-model="selectedCountry" :options="countries" option-attribute="label"
                placeholder="Select your country" />
            </UFormGroup>

            <UFormGroup label="Region/State/Province/County" name="region">
              <USelect v-model="selectedState" :options="states" option-attribute="label" :disabled="!selectedCountry"
                placeholder="Select your Region/State/Province/County" />
            </UFormGroup>

            <UFormGroup label="Choose the closest City or Town near you" name="city">
              <USelect v-model="selectedCity" :options="cities" option-attribute="label" :disabled="!selectedState"
                placeholder="Select a city or town closest to you" />
            </UFormGroup>

            <UFormGroup label="Specific Farm Location (Optional)" name="specificLocation">
              <UInput v-model="details.specificLocation" placeholder="Type in your specific farm location" />
            </UFormGroup>
          </fieldset>
        </div>

        <div class="max-w-lg mx-5 md:mx-auto py-4 px-8 bg-white rounded shadow-md text-sm">
          <!-- Farm Production -->
          <fieldset class="mb-4">
            <legend class="text-lg font-medium mb-2">Farm Production</legend>
            <div class="mb-2">
              <label class="block">Farming Practices:</label>
              <div class="mb-2">
                <input type="radio" id="organic" value="Organic" v-model="details.farmingPractice">
                <label for="organic" class="ml-2">Organic</label>
              </div>
              <div class="mb-2">
                <input type="radio" id="traditional" value="Traditional" v-model="details.farmingPractice">
                <label for="traditional" class="ml-2">Traditional</label>
              </div>
              <div class="mb-2">
                <input type="radio" id="other" value="Other" v-model="details.farmingPractice">
                <label for="other" class="ml-2">Other</label>
                <input type="text" v-model="details.otherPractice" v-if="details.farmingPractice === 'Other'"
                  class="ml-2 border rounded py-1 px-2">
              </div>
            </div>
            <div class="mb-2">
              <label class="block">Primary Crops you Plant in your Farm:</label>
              <!-- <div class="mb-2" v-for="crop in crops" :key="crop"> -->
              <!-- <label for="crop">Crops Planted</label> -->
              <div class="flex gap-5">
                <input type="text" id="crop" v-model="newCrop" class="w-full border rounded py-1 px-2">
                <Icon @click="addNewCrop" name="heroicons:plus-circle" color="" class="w-8 h-8 text-green-600" />
              </div>
              <ul class="flex flex-wrap gap-3 mt-3">
                <li v-for="(crop, index) in details.primaryCrops" :key="index"
                  class="py-[2px] px-2 bg-purple-800 rounded-md text-white font-medium text-sm">{{ crop }} <Icon
                    @click="removeCrop(index)" name="heroicons:x-mark-20-solid"
                    class="w-5 h-5 fill-white cursor-pointer">
                  </Icon>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <UFormGroup label="Farm Size (Acres)" name="farmSize">
                <UInput type="number" v-model="details.farmSize" placeholder="Farm size in acres" />
              </UFormGroup>
              <UFormGroup label="Years of Experience" name="yearsOfExperience">
                <UInput type="number" v-model="details.yearsOfExperience"
                  placeholder="How long is your farming experience in years?" />
              </UFormGroup>
            </div>
          </fieldset>
          <!-- class="w-full mt-4 bg-[#673F7B] text-white py-2 px-4 rounded hover:shadow-md hover:text-gray-200" -->

          <!-- Submit Button -->
          <UButton :loading="isLoading" loading-icon="i-eos-icons-loading" @click="register" size="md" color="purple"
            block>
            Register
          </UButton>
        </div>
      </UForm>
    </div>
    <div class="w-full flex items-center">
      <UCard v-if="isRegistrationComplete" class="max-w-lg mx-auto bg-purple-400 w-full" color="primary">
        <template #header>
          <div class="flex items-center justify-center gap-3">
            <UIcon name="i-heroicons-clipboard-document-check" class="text-white h-8 w-8" />
            <h3 class="text-white text-xl font-semibold">Success</h3>
          </div>
        </template>

        <Placeholder class="h-32" />
        <p class="text-white font-semibold">Your registration was successful.</p>
      </UCard>
    </div>
  </div>

</template>

<template>
  <div id="body">
    <div class="container pt-5 pb-3">
      <h3 class="text-center text-white">REGISTRATION FORM</h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 for pb-5">
          <form>
            <!-- LOGIN FORM -->
            <div v-show="step === 1">
              <h1 class="text-center mt-3 text-white">LOGIN</h1>
              <section class="mt-5">
                <label for="uname">Username*</label>
                <br />
                <input
                  id="uname"
                  v-model="$v.formResponses.username.$model"
                  type="text"
                  class="w-100"
                />
                <p v-if="errors" class="error">
                  <span v-if="!$v.formResponses.username.required"
                    >This field is required.</span
                  >
                  <span v-if="!$v.formResponses.username.minLength">
                    Field must have at least
                    {{ $v.formResponses.username.$params.minLength.min }}
                    characters.
                  </span>
                </p>
              </section>

              <section class="mt-5 mb-4">
                <label for="pass1">Password*</label>
                <br />
                <input
                  id="pass1"
                  v-model="$v.formResponses.password1.$model"
                  type="password"
                  class="w-100"
                />
                <p v-if="errors" class="error">
                  <span v-if="!$v.formResponses.password1.required"
                    >this field is required.</span
                  >
                  <span v-if="!$v.formResponses.password1.strongPassword">
                    Must contain a letter, a number, a special
                    character, and be more than 8 characters long.
                  </span>
                </p>
              </section>

              <section>
                <button
                  @click.prevent="submitForm"
                  class="submit mt-5  text-white"
                >
                  NEXT
                </button>
                <p v-if="errors" class="error">
                  Please fill the form correctly
                </p>
                <p
                  v-else-if="empty && uiState === 'submit clicked'"
                  class="error"
                >
                  Please input all fields
                </p>
                <p v-else-if="uiState === 'form submitted'" class="success">
                </p>
              </section>
            </div>

            <!-- REGISTRATION DETAILS FORM -->
            <div v-show="step === 2">
              <h1 class="text-white mt-3 text-center">REGISTRATION DETAILS</h1>
              <div class="row">
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="fname">First Name*</label>
                    <br />
                    <input
                      id="fname"
                      v-model="$v.formResponses.firstname.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.firstname.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.firstname.minLength">
                        Field must have at least
                        {{ $v.formResponses.firstname.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="lname">Last Name*</label>
                    <br />
                    <input
                      id="name"
                      v-model="$v.formResponses.lastname.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.lastname.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.lastname.minLength">
                        Field must have at least
                        {{ $v.formResponses.lastname.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="email">Email*</label>
                    <br />
                    <input
                      id="email"
                      v-model="$v.formResponses.email.$model"
                      type="email"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.email.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.email.email"
                        >Needs to be a valid email.</span
                      >
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="number">Phone number*</label>
                    <br />
                    <input
                      id="number"
                      v-model="$v.formResponses.number.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.number.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.number.nigNum">
                      Please input a valid phone number
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="fpass1">Password*</label>
                    <br />
                    <input
                      id="fpass1"
                      v-model="$v.formResponses.password1.$model"
                      type="password"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.password1.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.password1.strongPassword">
                        Must contain a letter, a number, a
                        special character, and be more than 8 characters long.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="pass2">Please re-type your Password</label>
                    <br />
                    <input
                      id="pass2"
                      v-model="$v.formResponses.password2.$model"
                      type="password"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.password2.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.password2.sameAsPassword"
                        >The passwords do not match.</span
                      >
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="date">Date of Birth*</label>
                    <br />
                    <input
                      id="date"
                      v-model="$v.formResponses.date.$model"
                      type="date"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.date.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.date.minLength">
                        Field must have at least
                        {{ $v.formResponses.date.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
              </div>
              <button
                @click.prevent="submitForm"
                class="submit mt-5 text-white"
              >
                NEXT
              </button>
              <p v-if="errors" class="error">
                Please fill the form correctly 
               
              </p>
              <p
                v-else-if="empty && uiState === 'submit clicked'"
                class="error"
              >
                Please input all fields 
              </p>
              <p v-else-if="uiState === 'form submitted'" class="success"></p>
              <button @click.prevent="prev()" class="ml-5 text-white">Previous</button>
            </div>

            <!-- EMPLOYMENT DETAILS -->

            <div v-show="step === 3">
              <h1 class="text-white mt-3 text-center">EMPLOYMENT DETAILS</h1>
              <div class="row">
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="sector">Sector*</label>
                    <br />
                    <input
                      id="sector"
                      v-model="$v.formResponses.sector.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.sector.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.sector.minLength">
                        Field must have at least
                        {{ $v.formResponses.sector.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="status">Employment status*</label>
                    <br />
                    <input
                      id="status"
                      v-model="$v.formResponses.status.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.status.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.status.minLength">
                        Field must have at least
                        {{ $v.formResponses.status.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="employer">Employer*</label>
                    <br />
                    <input
                      id="employer"
                      v-model="$v.formResponses.employer.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.employer.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.employer.minLength">
                        Field must have at least
                        {{ $v.formResponses.employer.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="address">Employer Address*</label>
                    <br />
                    <input
                      id="address"
                      v-model="$v.formResponses.address.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.address.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.address.minLength">
                        Field must have at least
                        {{ $v.formResponses.employer.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="email2">Office Email*</label>
                    <br />
                    <input
                      id="email2"
                      v-model="$v.formResponses.email2.$model"
                      type="email"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.email2.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.email2.email"
                        >Needs to be a valid email.</span
                      >
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="number2">Office Phone*</label>
                    <br />
                    <input
                      id="number2"
                      v-model="$v.formResponses.number2.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.number2.required"
                        > This field is required.</span
                      >
                      <span v-if="!$v.formResponses.number2.nigNum">
                        Please input a valid phone number
                      </span>
                    </p>
                  </section>
                </div>

                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="designation">Designation*</label>
                    <br />
                    <input
                      id="designation"
                      v-model="$v.formResponses.designation.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.designation.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.designation.minLength">
                        Field must have at least
                        {{ $v.formResponses.designation.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
              </div>
              <button
                @click.prevent="submitForm"
                class="submit mt-5 text-white"
              >
                NEXT
              </button>
              <p v-if="errors" class="error">
              Please fill the form correctly
              </p>
              <p
                v-else-if="empty && uiState === 'submit clicked'"
                class="error"
              >
               Please input all fields
              </p>
              <p v-else-if="uiState === 'form submitted'" class="success"></p>
              <button @click.prevent="prev()">Previous</button>
            </div>

            <!-- BANK DETAILS -->

            <div v-show="step === 4">
              <h1 class="text-white mt-3 text-center">BANK DETAILS</h1>
              <div class="row">
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="account">Account Number*</label>
                    <br />
                    <input
                      id="account"
                      v-model="$v.formResponses.account.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.account.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.account.accountNum">
                        Please enter a valid account number
                      </span>
                    </p>
                  </section>
                </div>

                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="bank">Bank*</label>
                    <br />
                    <input
                      id="bank"
                      v-model="$v.formResponses.bank.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.bank.required"
                        >This field is required.</span
                      >
                      <span v-if="!$v.formResponses.bank.minLength">
                        Field must have at least
                        {{ $v.formResponses.bank.$params.minLength.min }}
                        characters.
                      </span>
                    </p>
                  </section>
                </div>
                <div class="col-lg-6">
                  <section class="mt-5">
                    <label for="bvn">BVN*</label>
                    <br />
                    <input
                      id="bvn"
                      v-model="$v.formResponses.bvn.$model"
                      type="text"
                      class="w-100"
                    />
                    <p v-if="errors" class="error">
                      <span v-if="!$v.formResponses.bvn.required"
                        >Enter a valid bvn.</span
                      >
                      <span v-if="!$v.formResponses.bvn.bvnCheck"
                        >Please enter a valid BVN.</span
                      >
                    </p>
                  </section>
                </div>
              </div>
              <button
                @click.prevent="submitFinalForm"
                class="submit mt-5 text-white"
              >
                NEXT
              </button>
              <p v-if="errors" class="error">
                Please fill the form correctly
              </p>
              <p
                v-else-if="empty && uiState === 'submit clicked'"
                class="error"
              >
             Please input all fields
              </p>
              <p v-else-if="uiState === 'form submitted'" class="success"></p>
            </div>
          </form>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import { required, minLength, email, sameAs } from "vuelidate/lib/validators";


export default {
  data() {
    return {
      step: 1,
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponses: {
        username: null,
        password1: null,
        password2: null,
        firstname: null,
        lastname: null,
        email: null,
        number: null,
        date: null,
        sector: null,
        status: null,
        employer: null,
        address: null,
        email2: null,
        number2: null,
        designation: null,
        account: null,
        bank: null,
        bvn: null,
      },
    };
  },
  validations: {
    formResponses: {
      username: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      email2: {
        required,
        email,
      },
      firstname: {
        required,
        minLength: minLength(2),
      },
      lastname: {
        required,
        minLength: minLength(2),
      },
      number: {
        required,
        nigNum(number){
          return(
           /^[0]\d{10}$/.test(number)
          ) 
        }
      },
      date: {
        required,
        minLength: minLength(2),
      },

      password1: {
        required,
        strongPassword(password1) {
          return (
            /[a-z]/.test(password1) && //checks for a-z
            /[0-9]/.test(password1) && //checks for 0-9
            /\W|_/.test(password1) && //checks for special char
            password1.length >= 8
          );
        },
      },
      password2: {
        required,
        sameAsPassword: sameAs("password1"),
      },
      sector: {
        required,
        minLength: minLength(2),
      },
      status: {
        required,
        minLength: minLength(2),
      },
      employer: {
        required,
        minLength: minLength(2),
      },
      address: {
        required,
        minLength: minLength(2)
      },
      number2: {
        required,
        nigNum(number2){
          return(
           /^[0]\d{10}$/.test(number2)
          )
          
        }
      },
      designation: {
        required,
        minLength: minLength(2),
      },
      account: {
        required,
       accountNum(account){
          return(
           /^\d{10}$/.test(account)
          )
          
        }
      },
      bank: {
        required,
        minLength: minLength(2),
      },
      bvn: {
        required,
        bvnCheck() {
          return( 
            Vue.axios.post(
            "https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901",
            {
              seckey: "FLWSECK-aed5d4aa530e7059558eed75b2c76acb-X"
            },
            
            (error, response, body) => {
              if (error) {
                console.error(error);
                return;
              }
              console.log(`statusCode: ${response.statusCode}`);
              console.log(body);
            }
          )
          )
        },
      },
    },
  },

  methods: {
    submitForm() {
      this.empty = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        //this is where you send the responses
        this.uiState = "form submitted";
        // this.$swal("Great!", "Login successful !", "success");
        this.step++;
      }
    },
    prev() {
      this.step--;
    },
    submitFinalForm() {
      this.empty = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        //this is where you send the responses
        this.uiState = "form submitted";
        this.$swal("Great!", "Registration successful !", "success");
      }
    },
  },
};
</script>

<style scoped>
/* @media only screen and (max-width: 700px) {
.vue-form-wizard.md .wizard-icon-circle {
    width: 50px;
    height: 60px;
    font-size: 17px;
}
} */
.error {
  font-size: 15px;
  font-weight: 900;
  color: red;
  position: absolute;
}

.success {
  text-transform: uppercase;
  font-size: 12px;
  color: teal;
  position: absolute;
}
button {
  width: 30%;
  padding: 15px;
  background-color: green;
  border: green;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
}
</style>

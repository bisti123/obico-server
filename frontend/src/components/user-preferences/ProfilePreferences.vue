<template>
  <section class="profile">
    <h2 class="section-title">{{ onlyName() ? 'Edit Name' : 'Profile' }}</h2>
    <div class="form-group row">
      <label for="id_first_name" class="col-md-2 col-sm-3 col-form-label">First Name</label>
      <div class="col-md-10 col-sm-9">
        <saving-animation :errors="errorMessages.first_name" :saving="saving.first_name">
          <input
            id="id_first_name"
            v-model="firstName"
            type="text"
            maxlength="30"
            class="form-control"
          />
        </saving-animation>
      </div>
    </div>
    <div class="form-group row">
      <label for="id_last_name" class="col-md-2 col-sm-3 col-form-label">Last Name</label>
      <div class="col-md-10 col-sm-9">
        <saving-animation :errors="errorMessages.last_name" :saving="saving.last_name">
          <input
            id="id_last_name"
            v-model="lastName"
            type="text"
            maxlength="30"
            class="form-control"
          />
        </saving-animation>
      </div>
    </div>
    <div v-if="!onlyName()" class="row">
      <label for="id_email" class="col-md-2 col-sm-3 col-form-label">Primary Email</label>
      <div class="col-md-10 col-sm-9 col-form-label text-muted">
        {{ user.email }} ({{ user.is_primary_email_verified ? 'Verified' : 'Unverified' }})
        <div class="form-text"><a href="/accounts/email">Manage email addresses</a></div>
      </div>
    </div>
    <div v-if="!onlyName()" class="form-group row">
      <label class="col-md-2 col-sm-3 col-form-label">Password</label>
      <div class="col-md-10 col-sm-9 col-form-label text-muted">
        <a href="/accounts/password/change">Change</a>
      </div>
    </div>
  </section>
</template>

<script>
import SavingAnimation from '@src/components/SavingAnimation.vue'
import { onlyName } from '@src/lib/page_context'

export default {
  name: 'ProfilePreferences',

  components: {
    SavingAnimation,
  },

  props: {
    errorMessages: {
      type: Object,
      required: true,
    },
    saving: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      onlyName,
      firstName: this.user.first_name,
      lastName: this.user.last_name,
    }
  },

  watch: {
    firstName: function (newVal, prevVal) {
      this.$emit('updateSetting', 'first_name', newVal)
    },
    lastName: function (newVal, prevVal) {
      this.$emit('updateSetting', 'last_name', newVal)
    },
  },
}
</script>

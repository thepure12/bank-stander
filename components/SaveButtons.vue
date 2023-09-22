<template>
    <div class="mb-1">
        <b-btn size="sm" @click="$emit('click')">Save Setup</b-btn>
        <b-btn size="sm" variant="info" v-b-modal.save-help>Save Help</b-btn>
        <b-modal id="save-help" size="xl" title="Save Help" header-class="bg-dark text-white" ok-title="Close" ok-only>
            <b-card header-class="h5">
                <template #header>Selecting Properties File</template>
                <p class="text-danger h6">
                    MAKE A BACKUP OF YOUR PROPERTIES FILE BEFORE SAVING!
                </p>
                <p>
                    Select the properties file for the RuneLite profile you are using. It is most likely located at one
                    of
                    these locations:
                </p>
                <ul>
                    <li>%userprofile%/.runelite/profiles</li>
                    <li>%userprofile%/.runelite/profiles2</li>
                </ul>
                <p>The file is likely named something similar to:</p>
                <ul>
                    <li>default-0.properties</li>
                </ul>
                <p>
                    <img src="/bank-stander/profiles.png" alt="" width="100%">
                </p>
                <p>To select a new properties file refresh the page.</p>
            </b-card>
            <b-card header-class="h5">
                <template #header>Reloading Bank Stander</template>
                <div class="mb-3">
                    <p>Create a new RuneLite profile by duplicating your current one <span class="text-success h6">(skip if
                            you've done this already).</span></p>
                    <img src="/bank-stander/duplicate_profile.png" alt="" style="max-width: 100%;">
                </div>
                <div class="mb-3">
                    <p>Double click the new profile to load it.</p>
                    <img src="/bank-stander/load_new.png" alt="" style="max-width: 100%;">
                </div>
                <div class="mb-3">
                    <p>Double click the old profile to reload it.</p>
                    <img src="/bank-stander/load_old.png" alt="" style="max-width: 100%;">
                </div>
            </b-card>
        </b-modal>
    </div>
</template>
<script>
export default {

}
</script>
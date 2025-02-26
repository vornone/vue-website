<template>
  <div class="flex flex-col gap-5 lg:p-10 p-4 w-full">
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row lg:gap-20">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="lg:text-3xl text-xl font-light">
            Contact <strong class="font-bold">GRC Enterprise </strong>
            Today:
          </h1>
          <p class="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies sollicitudin mi
            ut tincidunt. Cras metus diam, congue sit amet cursus porttitor, molestie nec elit.
            Aenean non justo efficitur, tempus nibh et, aliquet diam. Nulla accumsan eros placerat
            ultricies ornare. Nullam vitae facilisis lectus, eu commodo augue.
          </p>
        </div>
        <div
          class="card bg-base-100 w-full max-w-sm shrink-0 lg:shadow-2xl shadow-sm shadow-primary"
        >
          <div class="card-body">
            <fieldset class="fieldset">
              <label class="fieldset-label text-primary font-bold">Name</label>
              <input type="email" class="input" placeholder="Name" />
              <label class="fieldset-label text-primary font-bold">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="fieldset-label text-primary font-bold">your message</label>
              <textarea class="textarea" placeholder="Message"></textarea>
              <button class="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

<template>
  <div id="fox-grid">
    <h1 class="col-span-full mb-8">Contact</h1>
    <div class="fox-grid">
      <div
        class="fox-form fox-grid lg:grid-flow-col col-span-full content-start"
      >
        <div
          class="fox-card grid bg-opacity-0 mb-2 col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-5"
        >
          <h4 class="text-gold dark:text-green col-span-full">Hours</h4>
          <p class="text-gold py-2 dark:text-green sm:mr-4 md:mr-2">
            Sunday:<span class="text-bone float-right">Closed</span><br />
            Monday:<span class="text-bone float-right">Closed</span><br />
            Tuesday:
            <span class="text-bone float-right">8AM–5:30PM</span><br />
            Wednesday:
            <span class="text-bone float-right">8AM–5:30PM</span><br />
            Thursday:
            <span class="text-bone float-right">8AM–6PM</span><br />
            Friday:
            <span class="text-bone float-right">8AM–5:30PM</span><br />
            Saturday:
            <span class="text-bone float-right">8AM–1PM</span>
          </p>
        </div>
        <div
          class="fox-card bg-opacity-0 grid col-span-full lg:col-span-5 mb-2 sm:order-last lg:row-start-2"
        >
          <h4 class="col-span-full pb-2 dark:text-green">Message</h4>
          <form
            class="mb-0 w-full"
            action="#"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label for="email" class="block text-gold dark:text-green"
                >Name</label
              >
              <div class="mt-1 w-full">
                <input
                  id="text"
                  name="name"
                  type="text"
                  required
                  class="border-gold rounded-foxsm bg-bone shadow-fox_l dark:shadow-fox_d mb-4 focus:border-gold dark:focus:border-green focus:ring-gold text-green px-2 py-1"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-gold dark:text-green"
                >Email address</label
              >
              <div class="mt-1 w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="border-gold rounded-foxsm bg-bone shadow-fox_l dark:shadow-fox_d mb-4 focus:border-gold dark:focus:border-green focus:ring-gold text-green px-2 py-1"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-gold dark:text-green"
                >Message</label
              >
              <div class="mt-1 w-full">
                <textarea
                  id="textarea"
                  name="message"
                  type="textarea"
                  autocomplete="email"
                  required
                  class="form-control block border-gold rounded-foxsm bg-bone shadow-fox_l dark:shadow-fox_d mb-4 focus:border-gold dark:focus:border-green focus:ring-gold text-green px-2 py-1"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-1 px-4 rounded-foxsm shadow-fox_l dark:shadow-fox_d font-semibold uppercase text-bone bg-gold dark:bg-green hover:bg-bone dark:hover:bg-bone hover:text-gold hover:ring-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold mt-6 mb-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div
          class="fox-card flex-col items-start bg-opacity-0 col-span-full sm:col-span-2 md:col-span-5 lg:col-span-7 lg:row-span-2 lg:order-last lg:mb-4"
        >
          <h4 class="text-gold dark:text-green col-span-full pb-2">Location</h4>
          <iframe
            class="h-full w-full rounded-foxsm shadow-fox_l dark:shadow-fox_d"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.134393249873!2d148.69096391583287!3d-33.83464462471964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b108d49e1d9a261%3A0x30bd4d3a4529b7a9!2sBrother%20Fox!5e0!3m2!1sen!2sid!4v1648356878811!5m2!1sen!2sid"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

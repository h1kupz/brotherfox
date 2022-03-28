<template>
  <div class="fox-contact">
    <h1 class="fox-contact-title text-brown fox-mblg">Contact</h1>
    <div class="fox-form fox-grid">
      <div class="col-span-2 sm:col-span-1 md:col-span-2">
        <h2 class="">Brother Fox</h2>
        <p class="text-bone py-4">112 Kendal St, Cowra NSW 2794, Australia</p>
        <p class="text-gold pb-4">+61 433 767 527</p>
      </div>
      <div class="col-span-2 sm:col-span-2 sm:ml-16 lg:ml-0 lg:row-start-2">
        <h2>Hours</h2>
        <p class="text-gold py-4">
          Sunday:<span class="text-bone float-right">Closed</span><br />
          Monday:<span class="text-bone float-right">Closed</span><br />
          Tuesday: <span class="text-bone float-right">8AM–5:30PM</span><br />
          Wednesday: <span class="text-bone float-right">8AM–5:30PM</span><br />
          Thursday: <span class="text-bone float-right">8AM–6PM</span><br />
          Friday: <span class="text-bone float-right">8AM–5:30PM</span><br />
          Saturday: <span class="text-bone float-right">8AM–1PM</span>
        </p>
      </div>

      <form
        class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 lg:col-start-4 fox-mb"
      >
        <div class="form-group">
          <input type="text" id="InputName" placeholder="Name" />
        </div>
        <div class="form-group">
          <input type="email" id="InputEmail" placeholder="Email address" />
        </div>
        <div class="form-group">
          <textarea
            id="FormControlText"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="form-group form-check flex content-center text-center mb-6">
          <input
            type="checkbox"
            class="form-check-input h-4 w-4 rounded-sm bg-bone checked:bg-gold checked:text-brown focus:outline-none transition duration-200 mt-0.5 bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="Check"
            checked
          />
          <label class="form-check-label inline-block text-gold" for="Check"
            >Send me a copy of this message</label
          >
        </div>
        <button
          type="submit"
          class="w-full fox-btn focus:bg-bone focus:shadow-lg focus:outline-none focus:ring-0 active:bg-bone active:shadow-lg"
        >
          Send
        </button>
      </form>
      <iframe
        class="h-full w-full rounded-foxsm col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 lg:col-start-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.134393249873!2d148.69096391583287!3d-33.83464462471964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b108d49e1d9a261%3A0x30bd4d3a4529b7a9!2sBrother%20Fox!5e0!3m2!1sen!2sid!4v1648356878811!5m2!1sen!2sid"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-contact", {
        x: 200,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-contact",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>

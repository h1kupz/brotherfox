<template>
  <div class="flex items-center h-screen justify-center mb-2 bg-cover">
    <div class="flex w-72 h-72 sm:w-96 sm:h-96 p-0 rounded-full bg-cover">
      <svg
        class="w-full h-full rounded-full animate-pulse-slow"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 3129.2 3129.2"
        style="enable-background: new 0 0 3129.2 3129.2"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <style type="text/css" id="style2">
          .st0 {
            fill: url(#SVGID_1_);
          }
        </style>
        <g id="g17">
          <radialGradient
            id="SVGID_1_"
            cx="1564.5931"
            cy="1532.7457"
            r="1406.325"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              style="stop-color: #fc019c; stop-opacity: 1"
              id="stop4"
            />
            <stop
              offset="0.5808"
              style="stop-color: #fc019c; stop-opacity: 0.41960785"
              id="stop6"
            />
            <stop
              offset="0.79"
              style="stop-color: #fc019c; stop-opacity: 0.21176471"
              id="stop8"
            />
            <stop
              offset="0.9386"
              style="stop-color: #101119; stop-opacity: 6.139398e-2"
              id="stop10"
            />
            <stop
              offset="1"
              style="stop-color: #101119; stop-opacity: 0"
              id="stop12"
            />
          </radialGradient>
          <path
            class="st0"
            d="M2888.3,1323.2c-38.3,44-81.1,94.2-95.1,111.6c0,0,0,0-14.7,14.7c-175.3,175.3-459.5,175.3-634.8,0   c-175.3-175.3-175.3-459.5,0-634.8c14.7-14.7,14.7-14.7,14.7-14.7c17.4-14.1,84.3-71.4,148.6-127.4l76.7-66.7   c64.4-56,57.2-137.7-16-181.6c0,0-445.5-267.3-803.2-267.3S761.4,424.3,761.4,424.3c-73.2,43.9-80.4,125.6-16,181.6l76.7,66.7   c64.4,56,131.3,113.3,148.6,127.4c0,0,0,0,14.7,14.7c175.3,175.3,175.3,459.5,0,634.8c-175.3,175.3-459.5,175.3-634.8,0   c-14.7-14.7-14.7-14.7-14.7-14.7c-14.1-17.4-56.9-67.6-95.1-111.6s-82.4-11.4-98.2,72.5c0,0-14.4,76.9-14.4,197.7   c0,655.1,910.9,1291.5,910.9,1291.5c69.9,48.9,122.3,19.2,116.4-65.9l-24.8-356.4c-5.9-85.1-12.7-172.9-15-195.2c0,0,0,0,0-20.8   c0-247.9,201-448.8,448.8-448.8c247.9,0,448.8,201,448.8,448.8c0,20.8,0,20.8,0,20.8c-2.3,22.2-9.1,110.1-15,195.2l-24.8,356.4   c-5.9,85.1,46.4,114.8,116.4,65.9c0,0,910.9-636.4,910.9-1291.5c0-120.8-14.4-197.7-14.4-197.7   C2970.7,1311.8,2926.5,1279.2,2888.3,1323.2z"
            id="path15"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.parallax();
  },

  methods: {
    parallax() {
      this.$gsap.from(".custom-img", {
        backgroundPosition: "50% 100% ",
        ease: "none",
        scrollTrigger: {
          trigger: ".custom-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
  },
};
</script>

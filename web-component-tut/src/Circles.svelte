<svelte:options tag="animated-circles" />

<script>
  import { randomUniform, randomInt } from "d3-random";
  import { scaleSequential } from "d3-scale";
  import { interpolatePlasma } from "d3-scale-chromatic";
  import { fly } from "svelte/transition";

  // because data is coming from a webcomponent prop now, it has to be a string.
  // let's pass it in as x|r pairs separated by commas
  // 10|23,20|12,30|17,...
  export let my_dataset;
  $: console.log(my_dataset);
  $: datasetArray = my_dataset.split(",").map(d => ({
    x: d.split("|")[0],
    r: d.split("|")[1]
  }));

  let colourScale = scaleSequential(interpolatePlasma).domain([5, 25]);

</script>

<!-- we use svelte's in/out transitions for entering and existing dom elements,
     and vanilla css transitions for retained elements that change. we'll use
     d3's colour scale functions to map colour too -->
<svg>
  {#each datasetArray as d, i (d.x)}
    <circle
      in:fly="{{y: 100}}" out:fly="{{y: 100}}"
      style={"transition: all 1s ease-out"}
      cx={d.x + "%"} cy="50%" r={d.r}
      fill={colourScale(d.r)}
       />
  {/each}
</svg>
<script lang="ts">
    export let style: string = "";
    export let src: string = "";
    export let alt: string = "";

</script>

<img class={"ui " + style + " image"} {src} {alt}/>
<script lang="ts">
    export let style: string = "";
    export let placeholder: string="";
    export let name: string="";
    export let value: string="";
</script>

<textarea {placeholder} {name} bind:value={value}></textarea>
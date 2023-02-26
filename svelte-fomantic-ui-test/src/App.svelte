<script lang="ts">
  import {Table, Table_Head, Table_Row, Table_Col, Table_Body} from "svelte-fomantic-ui";
</script>

<main>
  <Table ui celled fluid>
    <Table_Head>
      <Table_Row>
        <Table_Col head>Name</Table_Col>
        <Table_Col head>Age</Table_Col>
        <Table_Col head>Job</Table_Col>
      </Table_Row>
    </Table_Head>
    <Table_Body>
      <Table_Row>
        <Table_Col data-label="Name">James</Table_Col>
        <Table_Col data-label="Age">24</Table_Col>
        <Table_Col data-label="Job">Engineer</Table_Col>
      </Table_Row>
      <Table_Row>
        <Table_Col data-label="Name">Jill</Table_Col>
        <Table_Col data-label="Age">26</Table_Col>
        <Table_Col data-label="Job">Engineer</Table_Col>
      </Table_Row>
      <Table_Row>
        <Table_Col data-label="Name">Elyse</Table_Col>
        <Table_Col data-label="Age">24</Table_Col>
        <Table_Col data-label="Job">Designer</Table_Col>
      </Table_Row>
    </Table_Body>
  </Table>
</main>

<style>
 
</style>
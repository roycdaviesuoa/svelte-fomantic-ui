## Collections

In this folder, are various ways to collect content such as forms and tables, and the sub modules such as options, rows, sections and table columns, rows, headers and footers.

The `<Form>` module can take a settings property which is used to initialize the form as per the Fomantic UI [form behavior setting](https://fomantic-ui.com/behaviors/form.html): `$(.ui.form).form({ `*`settings`*` })`.

Each of the modules can have popups associated with them, as can the sub modules, so for example a table might be as follows:

```xml
<Table ui sortable celled popup={{content: "The columns in this table can be sorted by clicking on the header.", position: "top center", variation: "basic"}}>
    <Table_Head>
        <Table_Row>
            <Table_Col head popup={{content: "sort by name", position: "top left"}}>Name</Table_Col>
            <Table_Col head popup={{content: "sort by status", position: "top left"}}>Status</Table_Col>
            <Table_Col head popup={{content: "sort by notes", position: "top left"}}>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col positive>Approved</Table_Col>
            <Table_Col warning>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col negative>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
```

Note that the ebove example shows how the sortable table works, and how the sorting functionality is easily included through the 'sortable' property.
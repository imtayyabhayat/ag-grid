import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const VueExample = {
  template: `
        <div style="height: 100%">
            <div class="test-container">
                <div class="test-header">
                    <button v-on:click="onBtWithState()">Set Columns with State</button>
                    <button v-on:click="onBtRemove()">Remove Columns</button>
                </div>
                <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :defaultColDef="defaultColDef"
                :columnDefs="columnDefs"
                :rowData="rowData"></ag-grid-vue>
            </div>
        </div>
    `,
  components: {
    'ag-grid-vue': AgGridVue,
  },
  data: function () {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: null,
      columnDefs: null,
      rowData: null,
    };
  },
  beforeMount() {
    this.gridOptions = {};
    this.defaultColDef = {
      initialWidth: 100,
      sortable: true,
      resizable: true,
      pinned: null,
      sort: null,
    };
    this.columnDefs = getColumnDefs();
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onBtWithState() {
      this.gridApi.setColumnDefs(getColumnDefs());
    },
    onBtRemove() {
      this.gridApi.setColumnDefs([]);
    },
    onGridReady(params) {
      const httpRequest = new XMLHttpRequest();
      const updateData = (data) => {
        this.rowData = data;
      };

      httpRequest.open(
        'GET',
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      );
      httpRequest.send();
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          updateData(JSON.parse(httpRequest.responseText));
        }
      };
    },
  },
};

window.getColumnDefs = function getColumnDefs() {
  return [
    {
      field: 'athlete',
      width: 100,
      sort: 'asc',
    },
    { field: 'age' },
    {
      field: 'country',
      pinned: 'left',
    },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
};

new Vue({
  el: '#app',
  components: {
    'my-component': VueExample,
  },
});
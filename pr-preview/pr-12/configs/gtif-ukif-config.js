export default {
  id: "gtif-ukif",
  stacEndpoint: "https://gtif-ukif.github.io/gtif-ukif-catalog/gtif-ukif/catalog.json",
  brand: {
    noLayout: true,
    name: "GTIF UKIF Dashboard",
    theme: {
      colors: {
        primary: "#3333",
        secondary: "#A3A3A3",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.8,
        "primary-opacity": 0.9,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#009E73",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "GTIF UKIF",
  },
  templates: {
    expert: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: true,
              enableBackToPOIs: true,
              searchParams: {
                countrycode: "gb,ie,fr",
              },
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/8/9",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded : true
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded : true
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 5
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                        "--list-padding": "1rem",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "8/8/9", y: 0, w: "4/4/3", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: "8/8/9", y: 6, w: "4/4/3", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 12, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: false,
              enableSearch: true,
              searchParams: {
                countrycode: "gb,ie,fr",
              },
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded : true
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded : true
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded : true
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded : true
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 5
                },
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC) && {
              id: "Process",
              type: "internal",
              title: "Processes",
              layout: { x: 0, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
              },
            },
        },
        {
          defineWidget: (_, updatedCompareStac) =>
            window.eodashStore.actions.includesProcess(updatedCompareStac, true) && {
              id: "CompareMapProcess",
              type: "internal",
              title: "Processes",
              layout: { x: 9, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget(true) && {
              id: "ProcessResultChartCompare",
              type: "internal",
              title: "Compare Chart",
              layout: { x: 6, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
      ],
    },
  },
};

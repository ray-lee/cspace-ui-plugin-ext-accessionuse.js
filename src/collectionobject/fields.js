import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    'ns2:collectionobjects_accessionuse': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/accessionuse',
        },
      },
      accessionUseGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        accessionUseGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.accessionuse.accessionUseGroup.name',
                defaultMessage: 'Accession use',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          accessionUseType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUseType.fullName',
                  defaultMessage: 'Accession use type',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUseType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'accessionusetype',
                },
              },
            },
          },
          accessionUsedIn: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUsedIn.fullName',
                  defaultMessage: 'Accession used in',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUsedIn.name',
                  defaultMessage: 'Used in',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/class,concept/research',
                },
              },
            },
          },
          accessionUseRequestDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUseRequestDate.fullName',
                  defaultMessage: 'Accession use request date',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUseRequestDate.name',
                  defaultMessage: 'Request date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          accessionUseFilledDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUseFilledDate.fullName',
                  defaultMessage: 'Accession use filled date',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUseFilledDate.name',
                  defaultMessage: 'Filled date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          accessionUserMaterialType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUserMaterialType.fullName',
                  defaultMessage: 'Accession use material type',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUserMaterialType.name',
                  defaultMessage: 'Material type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'materialtype',
                },
              },
            },
          },
          accessionUseNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.accessionuse.accessionUseNotes.fullName',
                  defaultMessage: 'Accession use note',
                },
                name: {
                  id: 'field.ext.accessionuse.accessionUseNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
    },
  };
};

export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="accessionUseGroupList" subpath="ns2:collectionobjects_accessionuse">
      <Field name="accessionUseGroup">
        <Panel>
          <Cols>
            <Col>
              <Field name="accessionUseType" />
              <Field name="accessionUsedIn" />

              <Row>
                <Field name="accessionUseRequestDate" />
                <Field name="accessionUseFilledDate" />
              </Row>
            </Col>

            <Col>
              <Field name="accessionUserMaterialType" />
              <Field name="accessionUseNotes" />
            </Col>
          </Cols>
        </Panel>
      </Field>
    </Field>
  );
};

import fields from './fields';
import forms from './forms';

export default (configContext) => {
  const formsConfig = forms(configContext);

  return {
    fields: fields(configContext),
    form: formsConfig.default,
  };
};

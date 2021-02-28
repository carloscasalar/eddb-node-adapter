import toCamelCase from 'camelcase-keys-recursive';

type InputObject = Record<string, unknown>;

export const toCamelCaseKeys = <OutType>(object: InputObject): OutType => {
  return (toCamelCase(object) as unknown) as OutType;
};

import {useTranslation} from 'react-i18next';

const useTranslate = (ns: string = 'translation') => {
  const {t} = useTranslation(ns);

  return t as (key: string) => string;
};
export default useTranslate;

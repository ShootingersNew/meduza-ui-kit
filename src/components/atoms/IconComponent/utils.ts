import { EIconNames } from "../../../types/enums/index";

const NO_ICON_TEXT = 'no icon found';

const getIcon = async (name: EIconNames) => {
    try {
      const response = await fetch(
        new URL(`/public/icons/${name}.svg`, import.meta.url)
      );
      if (!response.ok) {
        throw new Error(`Error loading icon: ${name}`);
      }
      const icon = await response.text();
      return icon;
    } catch (error) {
      console.log(
        `Error loading icon: ${name}, falling back to default icon. Error:${error}`
      );
      return NO_ICON_TEXT;
    }
  };
  export { getIcon };


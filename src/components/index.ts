// Глобальные стили UI Kit (typography, palette, reset, fonts)
// Важно импортировать ДО экспорта компонентов, чтобы при сборке CSS не был пустым
import "../styles/index.styl";

import { IconComponent, LinkComponent, TypographyHeading, TypographyText, CardContainer } from "./atoms/";
import { TopicAdditionalsTemplate } from "./templates/";
export { IconComponent, LinkComponent, TypographyHeading, TypographyText, CardContainer, TopicAdditionalsTemplate };

// Export common types
export type { MaxWidthBreakpoints } from "../types/common";


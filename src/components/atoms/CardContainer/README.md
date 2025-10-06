# CardContainer - Адаптивная максимальная ширина

## Обзор

Компонент `CardContainer` теперь поддерживает адаптивную максимальную ширину через prop `maxWidth`.

## Использование

### 1. Фиксированная ширина (одна для всех экранов)

```vue
<CardContainer max-width="320px">
  <p>Контент карточки</p>
</CardContainer>
```

### 2. Адаптивная ширина (объект с брейкпоинтами)

```vue
<script setup lang="ts">
import { CardContainer, type MaxWidthBreakpoints } from "meduza-pet-ui-kit";

const cardMaxWidth: MaxWidthBreakpoints = {
  xs: "100%", // Мобильные (0-767px)
  md: "400px", // Планшеты (992-1199px)
  lg: "500px", // Десктоп (1200px+)
};
</script>

<template>
  <CardContainer :max-width="cardMaxWidth">
    <p>Адаптивная карточка</p>
  </CardContainer>
</template>
```

### 3. Пример для виджетов новостей

```vue
<script setup lang="ts">
import type { MaxWidthBreakpoints } from "meduza-pet-ui-kit";

// Карточка в горизонтальном скролле
const relatedCardWidth: MaxWidthBreakpoints = {
  xs: "280px",
  sm: "300px",
  md: "320px",
};

// Карточка в grid 2×2
const recommendedCardWidth: MaxWidthBreakpoints = {
  xs: "100%", // На мобильных - полная ширина
  md: "400px", // На планшетах и выше - фиксированная
};
</script>
```

## Брейкпоинты

| Размер | Диапазон    | Устройства                           |
| ------ | ----------- | ------------------------------------ |
| `xs`   | 0-767px     | Мобильные телефоны                   |
| `sm`   | 768-991px   | Планшеты (портретная ориентация)     |
| `md`   | 992-1199px  | Планшеты (ландшафт) и малые ноутбуки |
| `lg`   | 1200-1439px | Десктопы                             |
| `xl`   | 1440px+     | Большие мониторы                     |

## Поведение fallback

Если не указан определённый брейкпоинт, используется значение из меньшего:

```typescript
const maxWidth = {
  xs: "100%",
  lg: "500px",
  // sm и md автоматически унаследуют '100%' от xs
};
```

## TypeScript

```typescript
import type { MaxWidthBreakpoints } from "meduza-pet-ui-kit";

interface MyComponentProps {
  cardWidth?: string | MaxWidthBreakpoints;
}
```

## Пример

```vue
<!-- RelatedArticleCard.vue -->
<template>
  <CardContainer
    tag="article"
    :max-width="{ xs: '280px', sm: '300px', md: '320px' }"
    class="related-card"
  >
    <TypographyText>{{ article.title }}</TypographyText>
    <TypographyText size="small">{{ article.date }}</TypographyText>
  </CardContainer>
</template>
```

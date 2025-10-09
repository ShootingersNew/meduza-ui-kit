# meduza-pet-ui-kit — UI Kit (общая библиотека)

### Матрица токенов и классов

| Категория     | Ключ                      | CSS-класс                  | Значение  | Назначение                                  |
| ------------- | ------------------------- | -------------------------- | --------- | ------------------------------------------- |
| Типографика   | `text-default`            | `.text-default`            | `22px`    | Базовый размер основного текста.            |
| Типографика   | `text-medium`             | `.text-medium`             | `18px`    | Сокращённый размер для подписи/лидов.       |
| Типографика   | `text-small`              | `.text-small`              | `16px`    | Текст в карточках и вспомогательных блоках. |
| Типографика   | `text-smallest`           | `.text-smallest`           | `12px`    | Микротекст и служебные подписи.             |
| Типографика   | `title-main`              | `.title-main`              | `52px`    | Hero-заголовок тематических страниц.        |
| Типографика   | `title-sub`               | `.title-sub`               | `39px`    | Крупные подзаголовки и лиды.                |
| Типографика   | `title-small`             | `.title-small`             | `30px`    | Заголовки карточек и блоков.                |
| Фоновые цвета | `palette-bg-primary`      | `.palette-bg-primary`      | `#000000` | Основной фон (чёрный).                      |
| Фоновые цвета | `palette-bg-secondary`    | `.palette-bg-secondary`    | `#6E6E6E` | Второстепенные зоны, разделители.           |
| Фоновые цвета | `palette-bg-tretiary`     | `.palette-bg-tretiary`     | `#9D9D9D` | Ослабленные подложки.                       |
| Фоновые цвета | `palette-bg-green`        | `.palette-bg-green`        | `#51B500` | Акцент «позитив».                           |
| Фоновые цвета | `palette-bg-blue`         | `.palette-bg-blue`         | `#5A96C8` | Акцент «инфо».                              |
| Фоновые цвета | `palette-bg-red`          | `.palette-bg-red`          | `#C4372D` | Ошибки/alert.                               |
| Фоновые цвета | `palette-bg-firm`         | `.palette-bg-firm`         | `#D78E39` | Фирменный акцент Meduza.                    |
| Фоновые цвета | `palette-bg-white`        | `.palette-bg-white`        | `#FFFFFF` | Базовая светлая подложка.                   |
| Цвет текста   | `palette-color-primary`   | `.palette-color-primary`   | `#000000` | Основной текст.                             |
| Цвет текста   | `palette-color-secondary` | `.palette-color-secondary` | `#6E6E6E` | Второстепенный текст.                       |
| Цвет текста   | `palette-color-tretiary`  | `.palette-color-tretiary`  | `#9D9D9D` | Подписи/лейблы.                             |
| Цвет текста   | `palette-color-green`     | `.palette-color-green`     | `#51B500` | Успешные статусы.                           |
| Цвет текста   | `palette-color-blue`      | `.palette-color-blue`      | `#5A96C8` | Информационные статусы.                     |
| Цвет текста   | `palette-color-red`       | `.palette-color-red`       | `#C4372D` | Ошибки и предупреждения.                    |
| Цвет текста   | `palette-color-firm`      | `.palette-color-firm`      | `#D78E39` | Фирменные ссылки, бейджи.                   |
| Цвет текста   | `palette-color-white`     | `.palette-color-white`     | `#FFFFFF` | Инверсный текст на тёмном фоне.             |

### Дополнительные файлы стилей

- `fonts.styl` — объявляет `@font-face` для семейства `Roboto` (woff2/woff/ttf); подключается транзитивно через CSS-бандл.
- `reset.styl` — современный reset: `box-sizing`, нейтрализация отступов, наследование шрифтов для форм, авто-`text-wrap` заголовков.
- `index.styl` — точка входа, агрегирующая `fonts`, `variables`, `reset`; используется и в CSS-сборке, и в Stylus-пайплайне.
- `README.md` (в `src/styles`) — описывает, как регенерировать Stylus из JS-токенов командой `npm run generate-stylus`.

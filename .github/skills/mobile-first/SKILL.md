---
name: mobile-first
user-invocable: true
description: "Use this skill for all UI/layout work in the project. Enforce mobile-first responsive design, default column layout, and Tailwind breakpoints instead of fixed widths."
---

# Mobile-first layout rule

- По умолчанию верстка всегда строится под мобильный экран.
- Используй колонку как базовое расположение.
- Добавляй адаптивные изменения только через `sm:`, `md:`, `lg:` и т.п.
- Не используй фиксированные ширины (`w-96`, `w-[400px]`, `max-w-[900px]` и т.п.) без крайней необходимости.
- Дизайн должен оставаться чистым и легким, с мягкими тенями, скруглениями и воздухом.
- Если пользователь не говорит про адаптивность, всё равно делай mobile-first.

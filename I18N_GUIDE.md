# Hệ thống Đa ngôn ngữ (i18n) - Luxe Threads

## Tổng quan

Dự án này đã được cập nhật với hệ thống đa ngôn ngữ hoàn chỉnh, cho phép thay đổi toàn bộ nội dung trang web sang 5 ngôn ngữ khác nhau:
- 🇺🇸 English
- 🇻🇳 Tiếng Việt  
- 🇨🇳 中文
- 🇰🇷 한국어
- 🇯🇵 日本語

## Cấu trúc hệ thống

### 1. LanguageContext (`src/contexts/LanguageContext.tsx`)
- Quản lý state ngôn ngữ toàn cục
- Lưu trữ ngôn ngữ đã chọn vào localStorage
- Cung cấp các hàm để thay đổi ngôn ngữ

### 2. Translation Files (`src/i18n/locales/`)
- `en.json` - Tiếng Anh (mặc định)
- `vi.json` - Tiếng Việt
- `zh.json` - Tiếng Trung
- `ko.json` - Tiếng Hàn
- `ja.json` - Tiếng Nhật

### 3. LanguageSwitcher (`src/components/LanguageSwitcher.tsx`)
- Component dropdown để chọn ngôn ngữ
- Hiển thị cờ quốc gia và tên ngôn ngữ
- Tích hợp với LanguageContext

### 4. LanguageLoadingProvider (`src/components/LanguageLoadingProvider.tsx`)
- Hiển thị loading state khi chuyển đổi ngôn ngữ
- Cải thiện UX trong quá trình chuyển đổi

## Cách sử dụng

### Trong Component

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.description')}</p>
    </div>
  );
};
```

### Sử dụng Hook tùy chỉnh

```tsx
import { useTranslations } from '@/hooks/useTranslations';

const MyComponent = () => {
  const { t, tInterpolate, currentLanguage } = useTranslations();
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{tInterpolate('footer.copyright', { year: 2024 })}</p>
      <p>Current language: {currentLanguage}</p>
    </div>
  );
};
```

### Thay đổi ngôn ngữ programmatically

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { changeLanguage, currentLanguage } = useLanguage();
  
  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
  };
  
  return (
    <button onClick={() => handleLanguageChange('vi')}>
      Switch to Vietnamese
    </button>
  );
};
```

## Cấu trúc Translation Keys

Các key được tổ chức theo cấu trúc phân cấp:

```json
{
  "nav": {
    "home": "Trang chủ",
    "about": "Giới thiệu"
  },
  "home": {
    "hero": {
      "title": "Mềm mại & Sang trọng",
      "subtitle": "Từng sợi chỉ"
    },
    "features": {
      "quality": {
        "title": "Chất lượng cao cấp",
        "description": "Mô tả..."
      }
    }
  }
}
```

## Thêm nội dung mới

### 1. Thêm key vào file translation

```json
// src/i18n/locales/vi.json
{
  "newSection": {
    "title": "Tiêu đề mới",
    "description": "Mô tả mới"
  }
}
```

### 2. Sử dụng trong component

```tsx
const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
};
```

## Interpolation (Chèn biến)

```json
{
  "footer": {
    "copyright": "© {{year}} Luxe Threads. Đã đăng ký bản quyền."
  }
}
```

```tsx
const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
  );
};
```

## Pluralization (Số nhiều)

```json
{
  "items": {
    "zero": "Không có sản phẩm",
    "one": "{{count}} sản phẩm",
    "other": "{{count}} sản phẩm"
  }
}
```

```tsx
const ProductList = ({ count }: { count: number }) => {
  const { t } = useTranslation();
  
  return <p>{t('items', { count })}</p>;
};
```

## Lưu ý quan trọng

1. **Luôn sử dụng translation keys** thay vì hard-code text
2. **Cập nhật tất cả file ngôn ngữ** khi thêm nội dung mới
3. **Kiểm tra độ dài text** để đảm bảo UI không bị vỡ
4. **Sử dụng interpolation** cho các giá trị động
5. **Test trên tất cả ngôn ngữ** để đảm bảo hoạt động đúng

## Troubleshooting

### Text không hiển thị
- Kiểm tra key có đúng không
- Kiểm tra file translation có key đó không
- Kiểm tra i18n config có load đúng file không

### Ngôn ngữ không thay đổi
- Kiểm tra LanguageProvider có wrap đúng không
- Kiểm tra LanguageSwitcher có sử dụng đúng context không
- Kiểm tra localStorage có lưu được không

### Performance
- Sử dụng lazy loading cho các file translation lớn
- Cache translation keys thường dùng
- Optimize re-renders khi thay đổi ngôn ngữ

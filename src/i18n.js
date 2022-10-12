import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  ru: {
    translation: {
      'flat': 'Квартиры',
      'house': 'Дома',
      'dacha': 'Дачи',
      'shed': 'Гаражи',
      'land': 'Земельные участки',
      'room': 'Комнаты',
      'categories': 'Выберите категорию',
      'catering': 'Общепит',
      'commercial': 'Коммерческая недвижимость',
      'construction': 'Строительный',
      'construction-market': 'Строительный рынок',
      'add-your-company': 'Добавить свою компанию',
      'watch': 'Посмотреть',
      'map-search': 'Поиск по карте',
      'login': 'Войти',
      'delete': 'Удалить',
      'loading': 'Загрузка ...',
      'signup': 'Зарегистрироваться',
      'add-poster': 'Подать объявление',
      'my-posters': 'Мои объявления',
      'my-store': 'Мой магазин',
      'settings': 'Настройки',
      'payments': 'Платежи',
      'logout': 'Выйти',
      'send': 'Отправить',
      'add-an-address': 'Добавить адресс',
      'continue': 'Продолжить',
      'maximum-number-of-10-files': 'Максимальное количество 10 файлов',
      'market-online': 'рынок онлайн',
      'posters': 'Объявления',
      'click-on-the-ad-to-edit': 'Кликните на объявление что бы редактировать',
      'next-20-pages': 'Следующие 20 страниц',
      'nothing-found': 'Ничего не найдено',
      'search-by-address': 'Поиск по адресу',
      'first': 'Новостройка',
      'second': 'Вторичка',
      'photos': 'Фото',
      'address': 'Адрес',
      'detailed-description': 'Детальное описание',
      'description': 'Описание',
      'terms-of-sale': 'Условия продажи',
      'contact-information': 'Контактная информация',
      'choose-a-city-or-a-nearby-city': 'Выберите город или ближлежащий город',
      'full-address': 'Полный адрес',
      'full-address-map': 'Полный адрес (карта кликабельна)',
      'text': 'Техт',
      'price': 'Цена',
      'owner': 'Собственник',
      'agency': 'Агенство',
      'developer': 'Застройщик',
      'government': 'Государство',
      'email': 'Email',
      'deleting': 'Удаление',
      'web-site': 'Веб-сайт',
      'name': 'Имя',
      'enter-a-name': 'Введите имя',
      'enter-a-public-email-visible-to-other-uses': 'Введите адрес электронной почты, видимый для других пользователей',
      'enter-a-last-name': 'Введите фамилию',
      'phone': 'Телефон',
      'add-your-own-way-of-communication': 'Добавьте свой способ коммуникации',
      'set-the-communication-method': 'Метод коммуникации',
      'kitchen-area': 'Площадь кухни',
      'land-area': 'Площадь участка',
      'live-area': 'Жилая площадь',
      'places': 'Кол-во мест',
      'enter-the-address': 'Введите адрес',
      'rooms': 'Комнаты',
      'back': 'Назад',
      'still': 'Еще',
      'add-to-bookmarks': 'Добавить в закладки',
      'delete-to-bookmarks': 'Удалить из закладок',
      'bookmarks': 'Закладки',
      'type': 'Тип',
      'type-poster': 'Тип объявления',
      'type-commercial': 'Тип недвижимости',
      'filter': 'Фильтры',
      'common': 'Общие',
      'link': 'Ссылка',
      'add': 'Добавить',
      'call': 'Звонить',
      'from': 'От',
      'to': 'До',
      'start': 'C',
      'named': 'Название',
      'legal-name': 'Юридическое наименование',
      'enter-the-legal-name': 'Введите юридическое наименование',
      'enter-the-unp': 'Введите УНП',
      'enter-email': 'Введите email',
      'enter-the-password': 'Введите пароль',
      'repeat-the-password': 'Повторите пароль',
      'enter-a-unique-name': 'Введите уникальное имя',
      'the-password-has-been-changed': 'Пароль был изменен',
      'go-to-signup': 'Перейти к регистрации',
      'forgot-your-password': 'Забыли пароль?',
      'to-restore-your-password-specify-email': 'Что бы сбросить пароль укажите ваш email',
      'attach-a-photo-of-the-document-with-the-unp': 'Приложите фотографию документа с УНП',
      'enter-the-name-of-the-site': 'Введите название сайта',
      'to-signup-specify-the-email-address': 'Для регистрации укажите адрес электронной почты',
      'to-recover-your-password-check-your-email': 'Для восстановления пароля проверьте ваш email',
      'to-register-check-your-email': 'Для продолжения регистрации перейдите по ссылке отправленной вам на email',
      'avatar': 'Аватар',
      'the-field-is-required-to-fill-in': 'Это поле обязательно для заполнения',
      'the-value-must-be-an-integer': 'Значение должно быть целым числом',
      'too-much-value': 'Слишком большое значение',
      'specify-the-year-from-1900-to-2028': 'Укажите год с 1900 по 2028',
      'phone-format:-+375XX XXX XX XX': 'Телефонный формат:-+375XX XXX XX XX',
      'invalid-email-format': 'Неправильный формат email',
      'the-password-cannot-be-less-than-6-characters': 'Пароль не может быть меньше 6 символов',
      'the-password-cannot-be-more-than-30': 'Пароль не может быть больше 30 символов',
      'the-password-cannot-include-the-word-password': 'Пароль не может включать слово password',
      'latin-characters-only': 'Только латинские символы',
      'invalid-url-format': 'Неправильный формат URL',
      'type-of-rental': 'Тип аренды',
      'the-number-of-floors-is-less-than-the-specified-floor': 'Количество этажей меньше указанного этажа',
      'the-area-is-incorrectly-specified-for-example-the-total-area-is-less-than-residential': 'Площадь указана неправильно, например, общая площадь меньше жилой',
      'rental-conditions': 'Условия аренды',
      'show-contacts': 'Показать контакты',
      'show-user': 'Показать юзера',
      'specifications': 'Характеристика',
      'monthly': 'В месяц',
      'add-photo': 'Добавить фото',
      'drag-photo': 'Перетащите сюда фотографии',
      'cancel': 'Отмена',
      'are-you-sure-you-want-to-delete-bookmark': 'Вы действительно хотите удалить закладку',
      'are-you-sure-you-want-to-delete-posters': 'Вы действительно хотите удалить объявление',
      'select-the-type-of-poster': 'Выберите тип объявления',
      'what-amenities-are-there-in-the-apartment': 'Какие удобства есть в квартире',
      'wall-material': 'Материал стен',
      'count-rooms': 'Кол-во комнат',
      'loggia': 'Лоджия',
      'parking-place': 'Парковочное место',
      'combine-kitchen': 'Кухня совмещена с жил пл',
      'floor': 'Этаж',
      'count-floors': 'Кол-во этажей',
      'area': 'Площадь',
      'ceiling-height': 'Высота потолков',
      'year-of-construction': 'Год постройки',
      'state': 'Состояние',
      'what-amenities-are-there-in-the-house': 'Какие удобства есть в дома',
      'is-shed': 'Гараж',
      'number-of-car-spaces-in-the-garage': 'Кол-во мест в гараже',
      'property-type': 'Тип недвижимости',
      'tell-us-about-what-makes-your-garage-special': 'Расскажите нам о том что делает ваш гараж особенным',
      'tell-us-about-what-makes-your-home-special': 'Расскажите нам о том что делает ваш дом особенным',
      'tell-us-about-what-makes-your-apartment-special': 'Расскажите нам о том что делает вашу квартиру особенной',
      'tell-us-about-what-makes-your-land-special': 'Расскажите нам о том что делает ваш земельный участок особенным',
      'tell-us-about-what-makes-your-room-special': 'Расскажите нам о том что делает вашу комнату особенной',
      'tell-us-about-what-makes-your-property-special': 'Расскажите нам о том что делает вашу недвижимость особенной',
      'rent': 'Аренда',
      'sale': 'Продажа',
      'cube': 'Кирпич',
      'panel': 'Панель',
      'metal': 'Метал',
      'monolith': 'Монолит',
      'block': 'Блок',
      'other': 'Другое',
      'yes': 'Да',
      'no': 'Нет',
      'outside': 'Во дворе',
      'underground': 'Под землей',
      'fridge': 'Холодильник',
      'internet': 'Интернет',
      'kitchen-furniture': 'Кухонная мебель',
      'washer': 'Стиральная машина',
      'loggia-or-balcony': 'Лоджия или балкон',
      'stove': 'Плита',
      'tv': 'Телевизор',
      'conditioner': 'Кондиционер',
      'students': 'Не студентам',
      'children': 'Без детей',
      'animals': 'Без животных',
      'sauna': 'Баня или сауна',
      'pool': 'Басейн',
      'type-sales': 'Тип продавца',
      'decoration': 'С отделкой',
      'not-decoration': 'Без отделки',
      'building': 'Недострой',
      'tree': 'Дерево',
      'sales': 'Торговая',
      'industrial': 'Индустриальная',
      'warehouse': 'Складская',
      'office': 'Офисная',
      'hotel': 'Гостиничная',
      'area-total': 'Общая',
      'area-living': 'Жилая',
      'area-land': 'Участок',
      'area-kitchen': 'Кухня',
      'services': 'Услуги',
      'tools-and-equipment': 'Инструменты и оборудование',
      'repair-and-finishing': 'Ремонтно-отделочные работы',
      'everything-for-construction': 'Все для строительства',
      'everything-for-the-cottage-and-garden': 'Все для коттеджа и сада',
      'furniture': 'Мебель',
      'home-appliances': 'Бытовая техника',
      'transportation': 'Грузоперевозки',
      'complex-repair': 'Комплексный ремонт',
      'plumbing-works': 'Сантехнические работы',
      'electrical-installation-works': 'Электромонтажные работы',
      'facade-works': 'Фасадные работы',
      'roofing-works': 'Кровельные работы',
      'finishing-works': 'Отделочные работы',
      'laying-of-floor-coverings': 'Укладка напольных покрытий',
      'interior-design': 'Дизайн интерьера',
      'construction-of-buildings-and-structures': 'Строительство зданий и сооружений',
      'construction-of-baths-and-saunas': 'Строительство бань и саун',
      'foundation-works': 'Фундаментные работы',
      'installation-and-construction-of-swimming-pools': 'Монтаж и строительство плавательных бассейнов',
      'landscaping-works': 'Ландшафтный дизайн',
      'construction-tool': 'Строительный инструмент',
      'construction-machinery-and-equipment': 'Строительные машины и оборудование',
      'plastering-and-painting-tools': 'Инструменты для штукатурных и малярных работ',
      'carpentry-and-locksmith-tools-and-equipment': 'Столярные и слесарные инструменты и оборуд',
      'work-wear': 'Спецодежда',
      'windows': 'Окна',
      'doors': 'Двери',
      'paint-and-varnish-materials': 'Лакокрасочные материалы',
      'floor-coverings': 'Напольные покрытия',
      'plumbing': 'Водопровод',
      'tiles': 'Плитка',
      'ceilings': 'Потолки',
      'lighting': 'Освещение',
      'home-textiles': 'Домашний текстиль',
      'interior-items': 'Предметы интерьера',
      'sun-protection-systems': 'Солнцезащитные системы',
      'wall-building-materials': 'Стеновые строительные материалы',
      'facade-materials': 'Фасадные материалы',
      'roofing-materials': 'Кровельные материалы',
      'insulation': 'Изоляция',
      'heating': 'Отопление',
      'water-supply-and-pipeline': 'Водопровод и трубопровод',
      'sewerage': 'Канализация',
      'lumber': 'Пиломатериалы',
      'wood-slab-materials': 'Древесно-плитные материалы',
      'dry-building-mixes': 'Сухие строительные смеси',
      'concrete': 'Бетон',
      'bulk-materials': 'Сыпучие материалы',
      'reinforced-concrete-products': 'Железобетонные изделия',
      'garden-tool': 'Садовый инструмент',
      'garden-furniture': 'Садовая мебель',
      'garden-equipment': 'Садовое оборудование',
      'gates': 'Ворота',
      'fences': 'Заборы',
      'roller-shutters': 'Рольставни',
      'everything-for-gardening': 'Все для садоводства',
      'everything-for-the-improvement-of-he-territory': 'Все для улучшения своей территории',
      'everything-for-the-bath': 'Все для ванны',
      'upholstered-furniture': 'Мягкая мебель',
      'cabinet-furniture': 'Корпусная мебель',
      'bedroom-furniture': 'Мебель для спальни',
      'children\'s-furniture': 'Детская мебель',
      'chairs-and-armchairs': 'Стулья и кресла',
      'tables': 'Столы',
      'office-furniture': 'Офисная мебель',
      'specialized-furniture': 'Специализировованная мебель',
      'large-household-appliances': 'Крупная бытовая техника',
      'kitchen-appliances': 'Кухонная бытовая техника',
      'dishes': 'Посуда',
      'exercise-equipment': 'Тренажеры',
      'audio-and-video-equipment': 'Аудио и видеотехника',
      'water-purification': 'Очистка воды',
      'apartment-relocation': 'Квартирный переезд',
      'office-relocation': 'Офисный переезд',
      'transportation-in-the-city': 'Грузоперевозки по городу',
      'cargo-transportation-in-belarus': 'Грузоперевозки по беларуси',
      'click-or-drag-images': 'Кликните или перетащите картинки',
      'comfort': 'Удобства',
      'no-such-email-was-found': 'Такой email не найден',
      'email-already-busy': 'Email уже занят',
      'this-nickname-already-exists': 'Такой nickname уже занят',
      'unable-to-login': 'Ошибка авторизации',
    },
  },
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

export default i18n;

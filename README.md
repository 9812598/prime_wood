# Тестовое задание для prime_wood

## Как запустить проект?

Очень просто.
Перейдите по ссылке:

https://9812598.github.io/prime_wood/

## Как скачать проект себе?

1. Скачать репозиторий
   `git clone https://github.com/9812598/prime_wood.git`

2. Открыть файл index.html двойным нажатием мышки

_Комментарии_

## Что допустимо в поле title?

Кирила, латиница, пробелы, спецсимволы
Не очень хорошая идея и если данные будут отправляться на сервер, можно потенциально создать уязвимость и нужно стерелизовать данные.

## Что допустимо в поле price?

Чиста целые, дробные, цифры начинающиеся с +. Разделение допускается точкой или запятой. Не допускается точка или запятая в конце

Обрезается плюс, лишние нули в начале и конце

## Что допустимо в поле date?

Такие проодят:

01.03.2016 21:01:14

12.11.1988 16:13:59

Такие нет:

33.03.2016 21:01:14

01.13.2016 21:01:14

01.03.0015 21:01:14

01.03.2016 25:73:14

01.03.2016 21:01:93

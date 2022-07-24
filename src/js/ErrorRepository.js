export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [400, 'Неверный запрос'],
        [403, 'Доступ к ресурсу запрещен'],
        [404, 'Ресурс не найден'],
        [500, 'Внутренняя ошибка сервера'],
        [502, 'Ошибка шлюза'],
        [503, 'Служба недоступна'],
      ],
    );
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

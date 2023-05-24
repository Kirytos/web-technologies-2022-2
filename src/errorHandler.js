export function errorHandler(error) {
    console.error(error);
    alert('Ошибка: не удаётся получить данные с сервера!');
    window.location.pathname = 'error.html';
}
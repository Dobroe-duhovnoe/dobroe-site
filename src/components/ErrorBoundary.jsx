import { useRouteError, Link } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Упс! Что-то пошло не так</h1>
      <p className="text-gray-600">
        {error.message || 'Произошла непредвиденная ошибка'}
      </p>
      <Link
        to="/"
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

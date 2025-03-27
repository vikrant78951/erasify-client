import { LinkButton } from "../components/Button/Button";

export default function PageNotFound() {
  return (
    <div className="flex h-96 flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold text-gray-50">404</h1>
      <p className="mt-2 text-xl text-gray-500 mb-2">Page Not Found</p>
      <LinkButton
        url="/"
        className="px-10"
        variant="primaryRounded"
      >
        Go Home
      </LinkButton>
    </div>
  );
}

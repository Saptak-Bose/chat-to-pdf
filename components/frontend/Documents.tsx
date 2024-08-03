import PlaceholderDocument from "./PlaceholderDocument";

type Props = {};

export default function Documents({}: Props) {
  return (
    <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
      {/* Map through the docs */}

      <PlaceholderDocument />
    </div>
  );
}

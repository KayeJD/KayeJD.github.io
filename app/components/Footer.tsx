export function Footer() {
  return (
    <footer className="mt-16 mb-6 mx-4 md:mx-8 py-6 text-center text-gray-600 dark:text-gray-400 text-sm transition-all duration-300">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Karryl Dumalag
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}

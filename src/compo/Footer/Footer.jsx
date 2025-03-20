export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div>
              <img
                className="w-[30rem] h-[10rem] object-contain"
                src="/img/logo.webp"
                alt=""
              />
            </div>
            <p>
              Developed by <strong>Ansar Malik</strong>
            </p>
            <p>
              Built using <strong>React & TailwindCSS</strong>
            </p>
            <p>You hate returns. We love them!</p>
            <p>We pick up right from your doorstep.</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:am24626526jan@gmail.com">am24626526jan@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+923283302096">+92328-3302096</a>
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="text-sm space-y-2 mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  In The News
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-white">Support</h3>
            <ul className="text-sm space-y-2 mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@returnqueen.com"
                  className="hover:text-white"
                >
                  support@returnqueen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
          <p>© 2025 ReturnQueen. All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

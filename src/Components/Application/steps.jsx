import React from "react";
import { motion } from "framer-motion";
const steps = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div class="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="max-w-xl py-12 mx-auto lg:max-w-7xl">
            <div>
              <div class="grid grid-cols-2 gap-12 md:grid-cols-4 lg:space-y-0 lg:text-center">
                <div>
                  <div>
                    <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      ❖
                    </div>
                    <p class="mt-4 text-lg font-medium leading-6 text-white">
                      Authentication
                    </p>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    User accounts and social login.
                  </div>
                </div>
                <div>
                  <div>
                    <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      ❖
                    </div>
                    <p class="mt-4 text-lg font-medium leading-6 text-white">
                      Serverless Functions
                    </p>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    Custom backend code with logs and error handling.
                  </div>
                </div>
                <div>
                  <div>
                    <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      ❖
                    </div>
                    <p class="mt-4 text-lg font-medium leading-6 text-white">
                      Payments
                    </p>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    Stripe integration for all apps.
                  </div>
                </div>
                <div>
                  <div>
                    <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      ❖
                    </div>
                    <p class="mt-4 text-lg font-medium leading-6 text-white">
                      Database with GraphQL
                    </p>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    Define the data model in your database.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default steps;

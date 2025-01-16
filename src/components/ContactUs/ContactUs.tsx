'use client'

import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { LinkedinIcon, FacebookIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
import { FormButton } from '../FormButton/FormButton'
import { CustomTextarea } from '../CustomTextArea/CustomTextArea'
import { CustomTextField } from '../CustomTextField/CustomTextField'


// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   phone: Yup.string(),
//   company: Yup.string(),
//   enquiry: Yup.string().required('Enquiry is required')
// })

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const borderVariants = {
    animate: {
      background: [
        "linear-gradient(0deg, #3b82f6, #f97316)",
        "linear-gradient(90deg, #3b82f6, #f97316)",
        "linear-gradient(180deg, #3b82f6, #f97316)",
        "linear-gradient(270deg, #3b82f6, #f97316)",
        "linear-gradient(360deg, #3b82f6, #f97316)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <motion.h1 
              className="text-6xl font-bold text-slate-800 mb-4"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Contact
            </motion.h1>
            <p className="text-slate-600 text-lg">
              Reach out to get connected with one of our Talent Alchemists.
            </p>
          </div>

          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Get in touch</h2>
            <div className="space-y-4">
              <p className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                <PhoneIcon className="w-5 h-5 mr-3" />
                +44 (0) 1376-322045
              </p>
              <p className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                <MailIcon className="w-5 h-5 mr-3" />
                info@alchemygts.com
              </p>
              <div className="flex items-start text-slate-600">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  Alchemy House<br />
                  Freeport Office Village, Century Drive<br />
                  Braintree, Essex<br />
                  CM77 8YG<br />
                  UK
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Formik Form */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
             <motion.div 
                className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-blue-500 blur-2xl"
                animate={{
                    backgroundPosition: ['200% 50%', '-200% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Bottom Right Corner Glow */}
              <motion.div 
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-orange-400 blur-2xl"
                animate={{
                    backgroundPosition: ['200% 50%', '-200% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                //   delay: 2, // Offset timing for alternating effect
                }}
              />

              {/* Rotating Border Effect */}
              <motion.div 
                className="absolute -inset-[2px] rounded-2xl opacity-75"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(249, 115, 22, 0.5), transparent)',
                }}
                animate={{
                  backgroundPosition: ['200% 50%', '-200% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
          {/* Form Container with glowing border effect */}
          <div className="relative p-[4px] rounded-xl ">
            <motion.div 
              className="absolute inset-0 rounded-xl"
              variants={borderVariants}
              animate="animate"
            />
            <div className="relative bg-white rounded-xl p-8">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  enquiry: ''
                }}
                validationSchema={""}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values)
                  setSubmitting(false)
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-6">
                    <motion.div variants={containerVariants}>
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as={CustomTextField}
                          name="name"
                          type="text"
                          className="bg-white border-gray-200"
                          error={touched.name && errors.name}
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as={CustomTextField}
                          name="email"
                          type="email"
                          className="bg-white border-gray-200"
                          error={touched.email && errors.email}
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                      </motion.div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants} className="space-y-2">
                          <label className="block text-gray-700 font-medium">Phone</label>
                          <Field
                            as={CustomTextField}
                            name="phone"
                            type="tel"
                            className="bg-white border-gray-200"
                          />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                          <label className="block text-gray-700 font-medium">Company</label>
                          <Field
                            as={CustomTextField}
                            name="company"
                            type="text"
                            className="bg-white border-gray-200"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Enquiry <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as={CustomTextarea}
                          name="enquiry"
                          rows={6}
                          className="bg-white border-gray-200"
                          error={touched.enquiry && errors.enquiry}
                        />
                        <ErrorMessage name="enquiry" component="div" className="text-red-500 text-sm mt-1" />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white hover:opacity-90 transition-all duration-300"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                          <motion.span
                            className="ml-2 inline-block"
                            initial={{ x: 0 }}
                            animate={{ x: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            →
                          </motion.span>
                        </FormButton>
                      </motion.div>
                    </motion.div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
      </motion.div>
      </motion.div>
    </div>
  )
}


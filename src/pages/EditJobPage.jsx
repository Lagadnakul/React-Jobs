import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const EditJobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

const EditJobPage = () => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  // Move all useState declarations before any conditional returns
  const [type, setType] = useState(job?.type || '');
  const [title, setTitle] = useState(job?.title || '');
  const [description, setDescription] = useState(job?.description || '');
  const [salary, setSalary] = useState(job?.salary || '');
  const [location, setLocation] = useState(job?.location || '');
  const [companyName, setCompanyName] = useState(job?.company?.name || '');
  const [companyDescription, setCompanyDescription] = useState(job?.company?.description || '');
  const [contactEmail, setContactEmail] = useState(job?.company?.contactEmail || '');
  const [contactPhone, setContactPhone] = useState(job?.company?.contactPhone || '');

  if (!job) {
    return <div>Loading...</div>;
  }

  // Rest of your component code...

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedJob = {
      type,
      title,
      description,
      salary,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });

      if (res.ok) {
        toast.success('Job updated successfully');
        navigate(`/jobs/${id}`);
      }
    } catch (error) {
      toast.error('Error updating job');
      console.error(error);
    }
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Edit Job
            </h2>

            <div className='mb-4'>
              <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
                Job Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Title
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3'
                placeholder='Job Title'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3'
                placeholder='Job Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Job Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - $60K'>$50K - $60K</option>
                <option value='$60K - $70K'>$60K - $70K</option>
                <option value='$70K - $80K'>$70K - $80K</option>
                <option value='$80K - $90K'>$80K - $90K</option>
                <option value='$90K - $100K'>$90K - $100K</option>
                <option value='$100K - $125K'>$100K - $125K</option>
                <option value='$125K - $150K'>$125K - $150K</option>
                <option value='$150K+'>$150K+</option>
              </select>
            </div>

            <h3 className='text-xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Company Name
              </label>
              <input
                type='text'
                id='companyName'
                name='companyName'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Company Description
              </label>
              <textarea
                id='companyDescription'
                name='companyDescription'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Company Description'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Contact Email
              </label>
              <input
                type='email'
                id='contactEmail'
                name='contactEmail'
                className='border rounded w-full py-2 px-3'
                placeholder='Contact Email'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Contact Phone
              </label>
              <input
                type='tel'
                id='contactPhone'
                name='contactPhone'
                className='border rounded w-full py-2 px-3'
                placeholder='Contact Phone'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;

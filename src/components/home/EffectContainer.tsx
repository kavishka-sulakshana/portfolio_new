import Profile from '../../assets/images/mock_profile.jpg';

const EffectContainer = () => {
  return (
    <div className="w-60 bg-white mx-auto">
      <img src={Profile} className='w-full object-cover' loading='lazy' />
    </div>
  )
}

export default EffectContainer
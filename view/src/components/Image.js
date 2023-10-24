import React from 'react'

export default function Image({selectedImage,imageChange,removeSelectedImage}) {
   
  return (
    
    <div className='flex items-center justify-between dark:bg-gray-800 p-3'> 
    <input filename={selectedImage} accept='image/*' type='file' onChange={imageChange} className='text-sm text-stone-500
   file:mr-5 file:py-1 file:px-1 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700'/>

      {
        selectedImage && (
            <div className="flex flex-col gap-1">
                <img
                    src={URL.createObjectURL(selectedImage)}
                    className=' rounded-full h-24 w-24'
                    alt='thumb'
                />
                <button onClick={removeSelectedImage} 
                    className='border-2  item-center text-black dark:text-white'
                >change</button>
            </div>
        )
      }
    </div>
  )
}

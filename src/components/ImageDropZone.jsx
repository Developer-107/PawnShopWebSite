import { useDropzone } from 'react-dropzone'
import { X } from 'lucide-react'
import { useEffect, useMemo } from 'react'

export function ImageDropzone({ files = [], onChange }) {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      onChange([...files, ...acceptedFiles])
    },
  })

  // Create preview URLs for File objects
  const previews = useMemo(() => {
    return files.map((file) => {
      if (file instanceof File) {
        return {
          type: 'file',
          file,
          preview: URL.createObjectURL(file),
        }
      }

      if (typeof file === 'string') {
        return {
          type: 'url',
          preview: file,
        }
      }

      if (file?.url) {
        return {
          type: 'url',
          preview: file.url,
        }
      }

      return null
    }).filter(Boolean)
  }, [files])

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      previews.forEach((p) => {
        if (p.type === 'file') {
          URL.revokeObjectURL(p.preview)
        }
      })
    }
  }, [previews])

  const removeImage = (index) => {
    onChange(files.filter((_, i) => i !== index))
  }

  return (
    <div className="mt-2">

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 cursor-pointer bg-[#faf7f9]
          ${isDragActive ? 'border-black' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500 text-center">
          Drag & drop images here, or click to select
        </p>
      </div>

      {/* Preview Grid */}
      {previews.length > 0 && (
        <div className="grid grid-cols-4 gap-3 mt-3">
          {previews.map((item, i) => (
            <div key={i} className="relative group">

              <img
                src={item.preview}
                className="h-24 w-full object-cover rounded"
              />

              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              >
                <X size={14} />
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  )
}
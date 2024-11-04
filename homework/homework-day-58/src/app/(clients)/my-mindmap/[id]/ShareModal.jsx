import React, { useState } from 'react';
import { Globe, Lock, Link2, Copy } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShareModal({ isOpen, onClose, mindmapId, isPublic, onVisibilityChange }) {
  const [visibility, setVisibility] = useState(isPublic);
  const [copied, setCopied] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shareImage, setShareImage] = useState(null);

  const shareUrl = `${window.location.origin}/my-mindmap/${mindmapId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Đã sao chép liên kết!');
  };

  const handleVisibilityChange = async (newVisibility) => {
    try {
      const response = await fetch(`${process.env.SERVER_API}/mindmaps/${mindmapId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isPublic: newVisibility,
          shareTitle: title,
          shareDescription: description,
        }),
      });

      if (response.ok) {
        setVisibility(newVisibility);
        onVisibilityChange?.(newVisibility);
      }
    } catch (error) {
      console.error('Error updating visibility:', error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setShareImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
        </div>
  
        <div className="space-y-4">
          
          <div className="flex gap-4">
          <button
              onClick={() => handleVisibilityChange(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded ${!visibility ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              <Lock className="w-5 h-5" />
              Riêng tư
            </button>
            <button
              onClick={() => handleVisibilityChange(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded ${visibility ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              <Globe className="w-5 h-5" />
              Công khai
            </button>
            
          </div>
  
          
          {visibility ? (
            <div className="space-y-4">
              
              <p className="text-gray-700">Liên kết chia sẻ</p>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="bg-gray-100 w-full p-2 rounded"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Mindmap không có tên"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border rounded"
                  rows="3"
                  placeholder="Thêm mô tả cho bản chia sẻ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh chia sẻ</label>
                <input
                  type="text"
                  
                  className="bg-gray-100 w-full p-2 rounded"
                  value="https://mindmap.f8.edu.vn/_next/static/media/so-do-tu-duy.95dad645.jpg"
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-700">
              <p>Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này.</p>
              
            </div>
          )}
            <div className="flex justify-between mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Đóng
            </button>
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Lưu lại
            </button>
          </div>
          {copied && (
            <Alert className="bg-green-100 text-green-800">
              <AlertDescription>Đã sao chép liên kết!</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

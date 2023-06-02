import React, { useState, useEffect } from 'react';
import {dropbox} from './congif';

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async (path) => {
      setIsLoading(true);
      try {
        const response = await dropbox.filesListFolder({ path });

        if (response.status === 'failder') {
          throw new Error('Error fetching items');
        }

        setItems(response.result.entries);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchItems(currentPath);
  }, [currentPath]);

  

  const handleFolderClick = (folder) => {
    setCurrentPath(folder.path_lower);
  };

  const handleHomeClick = () => {
    setCurrentPath('')
  }

  const handleBackClick = () => {
    setCurrentPath(getParentPath(currentPath));
  };


  const getParentPath = (path) => {
    // Отбрасываем последний элемент пути для получения родительской папки
    const pathParts = path.split('/');
    pathParts.pop();
    return pathParts.join('/');
  };

  return (
    <div className='d-flex'>
      <h2 className="text-center ">Files Available</h2>
      <button onClick={handleHomeClick}>Home</button>
      {currentPath !== '' && (
        <button onClick={handleBackClick}>Back</button>
      )}

      {error && <p>{error.message}</p>}
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <ul>
        {items?.map((item) => (
          <li key={item.path_display}>
            {item['.tag'] === 'folder' ? (
              <button onClick={() => handleFolderClick(item)}>{item.name}</button>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
      )
    }
    </div>
  );
};

export default FileManager;

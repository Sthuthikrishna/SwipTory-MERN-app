import React, { useState, useEffect } from 'react';
import './homepg.css';
import { useDispatch, useSelector } from 'react-redux'
import { addStory, getAllCategory } from '../../actions';


export default function Homepg() {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState(' ');
  const [categoryName, setCategoryName] = useState('');
  const [storyImg, setStoryImg] = useState('');


  const category = useSelector(state => state.category)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);





  const togglePopup = () => {
    setOpen(!open);
  };
  const handlePost = () => {
    const form = new FormData();
    form.append('name', heading);
    form.append('picture', storyImg);
    form.append('description', description);
    form.append('category', category);
    dispatch(addStory(form))

    const storyData = {
      heading,
      description,
      storyImg,
      category
    }
    togglePopup();

  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name })
    }
    return options;

  }
  const handleStoryImage = (e) => {
    setStoryImg(e.target.value[''])
  }

  return (
    <>
      <div className="navbar" bg="light">
        <div className="nav-top">
          <a className="main" href="/">SwipTory</a>
          <a className="bookmark" href="/bookmark" >Bookmark</a>
          <button className="addstory" onClick={togglePopup}>Add Story</button>
          {open && (
            <div className="popup-overlay">
              <div className="popup-content">
                <img src='./images/close.png' alt='close' onClick={togglePopup} />
                <div className='slide-num'>
                  <span>Slide1</span>
                  <span>Slide2</span>
                  <span>Slide3</span>
                  <span>Slide4</span>
                  <span>Slide5</span>
                  <span>Slide6</span>
                </div>
                <div className='story-content'>
                  <label>Heading:</label>
                  <input type='text'
                    value={heading}
                    placeholder='Your heading'
                    onChange={(e) => setHeading(e.target.value)} />
                  <br />
                  <label>Description:</label>
                  <input type='text'
                    value={description}
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)} />
                  <br />
                  <label>Image:</label>
                  <input type='file'
                    value={storyImg}
                    placeholder='Add image url'
                    onChange={handleStoryImage} />
                  <br />
                  <label>Category:</label>
                  <select className='option'>
                    <option><input type='text'
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)} />Select Category</option>
                    {
                      createCategoryList(category.categories).map(option =>
                        <option key={option.value} value={option.value}>{option.name}</option>
                      )
                    }
                  </select>

                </div>
                <button className='post' type='submit' onClick={handlePost}>Post</button>
              </div>
            </div>
          )}
        </div>

        <div className="home">
          <div className="home-container">
            <div className="category">
              <a className="all" href='/homepg' >All</a>
              <a className="food" href='/food'>Food</a>
              <a className="hf" href='/health'>Health & Fitness</a>
              <a className="travel" href='/travel'>Travel</a>
              <a className="movie" href='/movie'>Movie</a>
              <a className="edu" href='/education'>Education</a>

            </div>
            <div>
              stories
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

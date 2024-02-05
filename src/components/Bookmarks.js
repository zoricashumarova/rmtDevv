import {
    bookmarksBtnEl,
    jobListBookmarksEl,
    jobDetailsEl,
    state
} from '../common.js';
import renderJobList from './JobList.js';

const clickHandler = event => {
    const bookmarkBtn = event.target.className.includes('bookmark');
    if (!bookmarkBtn) return;

    document.querySelector('.job-info__bookmark-icon').classList.toggle('job-info__bookmark-icon--bookmarked');

    if (state.bookmarkedJobItems.some((jobItem) => jobItem.id === state.activeJobItem.id)) {
        state.bookmarkedJobItems = state.bookmarkedJobItems.filter(bookmarkJobItem => bookmarkJobItem.id !== state.activeJobItem.id);
    } else {
        state.bookmarkedJobItems.push(state.activeJobItem);
    }
    
    renderJobList('search');
}

const mouseEnterHandler = () => {
    bookmarksBtnEl.classList.add('bookmarks-btn--active');
    jobListBookmarksEl.classList.add('job-list--visible');

    renderJobList('bookmark');
}

const mouseLeaveHandler = () => {
    bookmarksBtnEl.classList.remove('bookmarks-btn--active');
    jobListBookmarksEl.classList.remove('job-list--visible');
}


bookmarksBtnEl.addEventListener('mouseenter', mouseEnterHandler);
jobListBookmarksEl.addEventListener('mouseleave', mouseLeaveHandler);
jobDetailsEl.addEventListener('click', clickHandler);
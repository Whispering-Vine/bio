(function() {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
        .popup-floating-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #0d0d0d;
            color: white;
            border-radius: 50%;
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1100;
        }

        .popup-floating-button:hover {
            background-color: #f55555;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .popup-floating-button svg {
            width: 24px;
            height: 24px;
            transition: all 0.3s ease;
        }

        .popup-action-buttons {
            position: fixed;
            bottom: 90px;
            right: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            z-index: 1100;
        }

        .popup-action-button {
            background-color: #30303080;
            backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            color: white;
            border: none;
            border-radius: 20px;
            padding: 10px 15px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transform: translateX(100%);
        }

        .popup-action-button:hover {
            background-color: #333333;
        }

        .popup-status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
        }

        .popup-status-open {
            background-color: #4CAF50;
        }

        .popup-status-closed {
            background-color: #F44336;
        }
        
        .popup-status-warning {
            background-color: #FFEB3B; 
        }

        .popup-call-icon {
            width: 16px;
            height: 16px;
        }

        .popup-store-icon {
            width: 40px !important;
            height: 40px !important;
        }
    `;
    document.head.appendChild(style);
    
        // Create main button
        const mainButton = document.createElement('div');
        mainButton.className = 'popup-floating-button';
        mainButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000" version="1.1" class="popup-store-icon">
                <path d="M 265.282 189.537 C 262.412 190.310, 257.012 192.498, 253.282 194.400 C 240.937 200.693, 231.496 210.231, 225.469 222.500 C 219.520 234.609, 219 238.325, 219 268.705 L 219 295.989 203 336 L 187 376.011 187 426.042 L 187 476.073 195 481.244 L 203 486.415 203.017 620.957 C 203.032 735.206, 203.256 756.556, 204.499 762.500 C 205.305 766.350, 207.838 773.325, 210.128 778 C 213.377 784.633, 215.990 788.183, 222.026 794.163 C 228.007 800.090, 231.657 802.737, 238.130 805.843 C 242.734 808.052, 249.425 810.454, 253 811.180 C 258.278 812.252, 304.901 812.500, 501 812.500 C 728.404 812.500, 742.879 812.397, 749 810.740 C 752.575 809.772, 758.841 807.346, 762.925 805.348 C 768.269 802.736, 772.504 799.584, 778.030 794.109 C 784.008 788.185, 786.630 784.618, 789.872 778 C 792.162 773.325, 794.695 766.350, 795.501 762.500 C 796.744 756.556, 796.968 735.192, 796.983 620.845 L 797 486.190 801.750 483.429 C 804.362 481.910, 807.962 479.564, 809.750 478.215 L 813 475.763 813 426.110 L 813 376.458 797 336.500 L 781 296.542 781 268.981 C 781 238.294, 780.488 234.620, 774.527 222.500 C 768.433 210.110, 758.406 199.954, 746.569 194.182 C 732.920 187.527, 751.745 187.993, 499.356 188.066 C 306.059 188.121, 269.689 188.350, 265.282 189.537 M 290.500 251.399 C 286.739 253.064, 284.504 255.549, 282.538 260.254 C 281.361 263.071, 281 267.879, 281 280.731 L 281 297.525 265.500 336.259 L 250 374.993 250 405.380 L 250 435.767 252.250 436.370 C 256.633 437.544, 278.863 436.978, 287.619 435.470 C 307.587 432.029, 326.703 425.289, 338.265 417.613 L 344.030 413.786 347.270 416.257 C 355.795 422.759, 374.510 430.164, 392.741 434.249 C 400.945 436.087, 405.608 436.437, 422 436.444 C 439.921 436.452, 442.468 436.224, 453.460 433.629 C 471.994 429.253, 485.405 423.915, 495.836 416.760 L 500.173 413.785 504.597 416.963 C 515.389 424.712, 536.075 432.050, 556.995 435.548 C 564.943 436.877, 570.702 437.134, 582.860 436.704 C 599.320 436.121, 609.462 434.377, 625 429.455 C 634.164 426.552, 647.571 420.191, 652.583 416.369 C 654.291 415.066, 655.924 414, 656.212 414 C 656.500 414, 659.680 415.975, 663.279 418.388 C 673.843 425.472, 692.988 432.133, 712.381 435.471 C 721.139 436.979, 743.370 437.544, 747.750 436.370 L 750 435.767 750 405.380 L 750 374.993 734.500 336.259 L 719 297.525 719 280.475 C 719 264.764, 718.823 263.078, 716.750 259.020 C 715.512 256.599, 713.230 253.691, 711.677 252.559 L 708.853 250.500 501.177 250.285 C 330.346 250.109, 292.968 250.306, 290.500 251.399 M 339.500 479.227 C 326.786 488.642, 302.130 496.626, 277.898 499.175 L 266 500.426 266 619.312 C 266 752.774, 265.420 742.818, 273.468 747.534 L 277.676 750 404.310 750 L 530.944 750 531.222 668.250 L 531.500 586.500 533.882 581.230 C 536.873 574.612, 545.228 566.792, 551.643 564.606 C 555.647 563.242, 562.099 563, 594.518 563 L 632.681 563 638.821 566.068 C 642.231 567.772, 646.523 570.961, 648.473 573.239 C 650.404 575.495, 652.888 579.756, 653.992 582.708 C 655.942 587.920, 656 590.416, 656 669.038 L 656 750 689.250 749.984 C 721.814 749.967, 722.580 749.921, 726.396 747.734 C 728.539 746.505, 731.126 743.932, 732.146 742.016 C 733.921 738.679, 734 733.487, 734 619.409 L 734 500.288 725.994 499.620 C 701.782 497.601, 676.662 490.033, 662.378 480.455 L 656.077 476.230 652.789 478.696 C 647.535 482.637, 635.254 488.515, 625.328 491.839 C 620.283 493.528, 611.058 495.929, 604.828 497.175 C 595.788 498.983, 590.268 499.430, 577.500 499.391 C 564.953 499.353, 559.283 498.869, 551.227 497.148 C 531.339 492.899, 514.670 486.543, 504.782 479.439 L 499.788 475.851 497.644 477.845 C 493.812 481.410, 480.741 487.815, 470 491.391 C 464.225 493.314, 454.775 495.889, 449 497.115 C 440.719 498.872, 435.118 499.351, 422.500 499.384 C 405.923 499.427, 396.310 498.135, 381.500 493.873 C 367.791 489.929, 355.085 484.421, 348.500 479.569 C 346.850 478.353, 345.050 477.112, 344.500 476.811 C 343.950 476.511, 341.700 477.598, 339.500 479.227 M 361.222 566.047 C 354.658 569.327, 350.336 573.579, 346.756 580.278 C 344.521 584.460, 344.500 584.882, 344.500 625 L 344.500 665.500 347.446 670.819 C 351.034 677.295, 355.620 681.459, 362.954 684.899 L 368.500 687.500 405.500 687.500 C 438.806 687.500, 443.025 687.317, 447.762 685.666 C 454.760 683.226, 463.021 675.623, 466.118 668.770 C 468.495 663.512, 468.500 663.415, 468.500 625 C 468.500 586.585, 468.495 586.488, 466.118 581.230 C 463.127 574.612, 454.772 566.792, 448.357 564.606 C 444.353 563.242, 437.901 563, 405.482 563 L 367.319 563 361.222 566.047" stroke="none"  fill="#FFFFFF" fill-rule="evenodd"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="popup-close-icon" style="display: none;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
    
        // Create action buttons
        const actionButtons = document.createElement('div');
        actionButtons.className = 'popup-action-buttons';
        actionButtons.innerHTML = `
            <button class="popup-action-button popup-call-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="popup-call-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Us
            </button>
            <button class="popup-action-button" data-location="Fourth St">
                <span class="popup-status-indicator"></span>
                Fourth St: Open
            </button>
            <button class="popup-action-button" data-location="SouthCreek">
                <span class="popup-status-indicator"></span>
                SouthCreek: Open
            </button>
        `;
    
        // Append elements to body
    document.body.appendChild(mainButton);
    document.body.appendChild(actionButtons);

    // Toggle button state with staggered animation
    function openPopupButtons() {
        const storeIcon = mainButton.querySelector('.popup-store-icon');
        const closeIcon = mainButton.querySelector('.popup-close-icon');
        const buttons = Array.from(actionButtons.querySelectorAll('.popup-action-button'));
        
        storeIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        
        buttons.reverse().forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = '1';
                button.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }

    function closePopupButtons() {
        const storeIcon = mainButton.querySelector('.popup-store-icon');
        const closeIcon = mainButton.querySelector('.popup-close-icon');
        const buttons = Array.from(actionButtons.querySelectorAll('.popup-action-button'));
        
        storeIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = '0';
                button.style.transform = 'translateX(100%)';
            }, index * 100);
        });
    }

    let isOpen = false;
    mainButton.addEventListener('click', () => {
        if (isOpen) {
            closePopupButtons();
        } else {
            openPopupButtons();
        }
        isOpen = !isOpen;
    });

    setTimeout(() => {
        openPopupButtons();
        isOpen = true;
    }, 3000);

    // Cache object to store the hours data
    let popupHoursCache = {
        data: null,
        lastFetch: null
    };

    function shouldFetchNewPopupData() {
        if (!popupHoursCache.lastFetch) return true;

        const now = new Date();
        const lastFetch = new Date(popupHoursCache.lastFetch);
        const pstNow = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
        const pstLastFetch = new Date(lastFetch.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));

        return pstNow.getDate() !== pstLastFetch.getDate() ||
            pstNow.getMonth() !== pstLastFetch.getMonth() ||
            pstNow.getFullYear() !== pstLastFetch.getFullYear();
    }

    const popupLocationMapping = {
        'Fourth St': 'fourth',
        'SouthCreek': 'foothill'
    };

    async function fetchPopupHoursData() {
        if (!shouldFetchNewPopupData() && popupHoursCache.data) {
            return popupHoursCache.data;
        }

        try {
            const response = await fetch('https://wvwine.co/hours_today.json', { cache: 'no-store' });
            const data = await response.json();
            popupHoursCache.data = data;
            popupHoursCache.lastFetch = new Date().toISOString();
            return data;
        } catch (error) {
            console.error('Error fetching location hours:', error);
            return null;
        }
    }

    async function checkPopupLocationStatus(location) {
        const data = await fetchPopupHoursData();
        if (!data) return null;
        const mappedLocation = popupLocationMapping[location];
        return data[mappedLocation] || null;
    }

    async function updatePopupStatusIndicator(button) {
        const location = button.dataset.location;
        const indicator = button.querySelector('.popup-status-indicator');
        const locationData = await checkPopupLocationStatus(location);
        
        if (!locationData) {
            indicator.className = 'popup-status-indicator popup-status-warning';
            button.innerHTML = `<span class="popup-status-indicator popup-status-warning"></span>${location}: Call for Hours`;
            button.title = `Status for ${location} is unknown`;
            return;
        }

        const now = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
        const currentHour = new Date(now).getHours();
        const { 'opening-soon': openingSoon, 'open': openTime, 'closing-soon': closingSoon, 'close': closeTime } = locationData;

        if (openingSoon === null && openTime === null && closingSoon === null && closeTime === null) {
            indicator.className = 'popup-status-indicator popup-status-closed';
            button.innerHTML = `<span class="popup-status-indicator popup-status-closed"></span>${location}: Closed`;
            button.title = `${location} is closed today`;
            return;
        }

        let status, statusClass;
        if (currentHour < openingSoon) {
            status = 'Closed';
            statusClass = 'popup-status-closed';
        } else if (currentHour >= openingSoon && currentHour < openTime) {
            status = 'Opening Soon';
            statusClass = 'popup-status-warning';
        } else if (currentHour >= openTime && currentHour < closingSoon) {
            status = 'Open';
            statusClass = 'popup-status-open';
        } else if (currentHour >= closingSoon && currentHour < closeTime) {
            status = 'Closing Soon';
            statusClass = 'popup-status-warning';
        } else {
            status = 'Closed';
            statusClass = 'popup-status-closed';
        }

        indicator.className = `popup-status-indicator ${statusClass}`;
        button.innerHTML = `<span class="popup-status-indicator ${statusClass}"></span>${location}: ${status}`;
        button.title = `${location} is currently ${status}`;
    }

    actionButtons.querySelectorAll('.popup-action-button').forEach(button => {
        if (button.classList.contains('popup-call-button')) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.href = 'tel:7757879463';
            });
        } else {
            updatePopupStatusIndicator(button);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                if (button.dataset.location === 'Fourth St') {
                    window.location.href = 'https://maps.apple.com/?address=4201%20W%20Fourth%20St,%20Reno,%20NV%20%2089523,%20United%20States&auid=10910040195340338537&ll=39.514067,-119.854427&lsp=9902&q=Whispering%20Vine%20Wine%20Co.';
                } else if (button.dataset.location === 'SouthCreek') {
                    window.location.href = 'https://maps.apple.com/?address=85%20Foothill%20Rd,%20Ste%201,%20Reno,%20NV%20%2089511,%20United%20States&auid=5244288323040263719&ll=39.438890,-119.770943&lsp=9902&q=Whispering%20Vine%20Wine%20Co.';
                }
            });
        }
    });

    setInterval(() => {
        actionButtons.querySelectorAll('.popup-action-button:not(.popup-call-button)').forEach(updatePopupStatusIndicator);
    }, 60000);
})();

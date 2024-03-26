//your JS code here. If required.
function removeSelectedColor() {
            var selectElement = document.getElementById('colorSelect');
            var selectedOptionIndex = selectElement.selectedIndex;
            if (selectedOptionIndex !== -1) {
                selectElement.remove(selectedOptionIndex);
            }
}

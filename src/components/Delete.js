

export function toggleDelete() {
    const elements = document.getElementsByClassName("btn-deleteStaff");
    for (const element of elements) {
        element.classList.toggle("js_active-input");
    }
    console.log(elements);
}



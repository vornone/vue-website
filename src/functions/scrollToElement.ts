export function scrollToSection(sectionId: string) {
  // Find the element with the given id
  const element = document.getElementById(sectionId)

  if (element) {
    // Method 1: Simple scroll to element
    element.scrollIntoView({ behavior: 'smooth' })

    // Method 2: Using the URL hash (will add the anchor to URL)
    // this.$router.push({ path: this.$route.path, hash: '#' + sectionId });

    // Method 3: Manual scroll calculation if you need more control
    // const offsetTop = element.offsetTop;
    // window.scrollTo({
    //   top: offsetTop - 80, // Subtract header height if needed
    //   behavior: 'smooth'
    // });
  }
}

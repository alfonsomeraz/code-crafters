function Navigationbar(){
    return(
      <nav class="navigationbar">
        <div class="header">
            <a href="#" class="button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="links">
                <ul>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/patient data">PATIENT DATA</a></li>
                    <li><a href="/exams">EXAMS</a></li>
                    <li><a href="/search">SEARCH</a></li>
                </ul>
            </div>
        </div>

      </nav>
    );
}
export default Navigationbar;
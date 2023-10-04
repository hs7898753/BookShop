import Navbar from "../../components/Navbar";
import "./index.css";

function AddBook() {
    return (
        <>
        <Navbar/>
        <div className="addbook">
            <h1>Book Details</h1>
            <form>
                <label >Book Name <input type="text" id="bookname" name="bookname" placeholder="Book Name"/></label><br/>
                <label >Author <input type="text" id="author" name="author" placeholder="Author"/></label><br/>
                <label >Genre <input type="text" id="genre" name="genre" placeholder="Genre"/></label><br/>
                <label >Price <input type="text" id="price" name="price" placeholder="Price"/></label><br/>
                <label >Description</label><br/>
                <textarea id="description" name="description" placeholder="Description" style={{height:"200px", width:"90%"}}></textarea><br/>
                <label >Cover Pic <input type="file" id="image" name="image" placeholder="Image"/></label><br/>
                <br/>
                <input id="submit" type="submit" value="Submit"/><br/>
            </form>
        </div>
        </>
    )
}

export default AddBook;
//Product
class DocumentI {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  show(): void {
    console.log(this.items.join(", "));
  }
}

//Builder Interface
interface DocumentBuilder {
    addParagraph(): void;
    addImage(): void;
    addSection(): void;
    getDocument(): DocumentI;
}

//Concrete Builder
class SimpleDocumentBuilder implements DocumentBuilder {
    document: DocumentI;
    constructor () {
        this.document = new DocumentI();
    }
    addParagraph(): void {
        this.document.addItem('Paragraph Added');
    }
    addImage(): void {
        this.document.addItem('Image Added');
    }
    addSection(): void {
        this.document.addItem('Added section');
    }
    getDocument(): DocumentI {
        return this.document;
    }
}

//Director
class Director {
    constructDocument(documentBuilder: DocumentBuilder) {
        documentBuilder.addParagraph();
        documentBuilder.addImage();
        documentBuilder.addSection();

        return documentBuilder.getDocument();
    }
}

const simpleBuilder = new SimpleDocumentBuilder();

const director = new Director();

const simpleDocument = director.constructDocument(simpleBuilder);
console.log("Simple Document:");
simpleDocument.show();
from goldenverba.components.schema import schema_generation
from goldenverba.components.util import setup_client

client = setup_client()


def test_init_documents_no_vectorizer():
    doc, chunk = schema_generation.init_documents(client, force=True)

    assert doc == schema_generation.SCHEMA_DOCUMENT
    assert chunk == schema_generation.SCHEMA_CHUNK


def test_init_documents_unknown_vectorizer():
    doc, chunk = schema_generation.init_documents(client, "cohere", force=True)

    assert doc == schema_generation.SCHEMA_DOCUMENT
    assert chunk == schema_generation.SCHEMA_CHUNK


def test_init_documents_vectorizer():
    doc, chunk = schema_generation.init_documents(
        client, vectorizer="text2vec-openai", force=True
    )

    assert doc == schema_generation.SCHEMA_DOCUMENT
    assert chunk["classes"][0]["vectorizer"] == "text2vec-openai"


def test_init_cache_no_vectorizer():
    cache = schema_generation.init_cache(client, force=True)

    assert cache == schema_generation.SCHEMA_CACHE


def test_init_cache_vectorizer():
    cache = schema_generation.init_cache(
        client, vectorizer="text2vec-openai", force=True
    )

    assert cache == schema_generation.SCHEMA_CACHE
    assert cache["classes"][0]["vectorizer"] == "text2vec-openai"
